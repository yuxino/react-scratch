/**
 * @private check string is a link ?
 * @param {*} str 
 */
const isLink = str => /^https?:\/\//i.test(str)

/**
 * @public get canvas context2d
 * @param {*} ref 
 */
const getContext2d = (ref) => {
  const ctx = ref.getContext('2d')
  return ctx
}

/**
 * @public get base background of canvas
 * @param {*} props 
 */
const getBg = (props) => {
  const { baseBg } = props
  const ret = isLink(baseBg) ? `url(${baseBg})` : baseBg
  return ret
}

/**
 * @public set canvas size
 * @param {*} node 
 * @param {*} props 
 */
const setSize = (node, props) => {
  const { width, height } = props
  node.width = width
  node.height = height
}

/**
 * @private set cover img
 * @param {*} ref 
 * @param {*} props 
 */
const setCoverImg = (ref,props) => {
  const { width, height, coverBg } = props
  const ctx = getContext2d(ref,props)
  const img = new Image()
  img.src = coverBg
  ctx.drawImage(img, width, height)
  ctx.globalCompositeOperation = 'destination-out'
}

/**
 * @private set conver background color
 * @param {*} ref 
 * @param {*} props 
 */
const setCoverBgColor = (ref,props) => {
  const { coverBg, width, height } = props
  const ctx = getContext2d(ref,props)
  ctx.fillStyle = coverBg;
  ctx.fillRect(0, 0, width, height)
  ctx.globalCompositeOperation = 'destination-out'
}

/**
 * @public switch to set cover background color or set cover img
 * @param {*} ref 
 * @param {*} props 
 */
const setCover = (ref, props) => {
  const { coverBg } = props
  isLink(coverBg) ? setCoverImg(ref, props) 
                  : setCoverBgColor(ref, props)
}

/**
 * @public draw a cirle in (x,y) postion
 * @param {*} ref 
 * @param {*} x 
 * @param {*} y 
 * @param {*} size 
 */
const drawCircle = (ref, x, y, size) => {
  const ctx = getContext2d(ref)
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fill()
}

/**
 * @public compute the ratio in canvas
 * @param {*} ref 
 * @param {*} props 
 */
const computeRatio = (ref, props) => {
  const { width, height } = props,
        pixels = getContext2d(ref).getImageData(0, 0, width, height),
        transPixels = []
  pixels.data.forEach((item, i) => {
    const pixel = pixels.data[i + 3]
    if (pixel === 0) {
        transPixels.push(pixel)
    }
  })
  return transPixels.length / pixels.data.length
}

export {
  getBg,
  getContext2d,
  setSize,
  setCover,
  drawCircle,
  computeRatio
}