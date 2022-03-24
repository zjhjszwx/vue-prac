const copy = {
  bind(el, {value}) {
    el.$value = value

    if(!el.$value) {
      console.log('无复制内容')
      return
    }

    el.handler = () => {
      // create textarea tag
      const textarea = document.createElement('textarea')
      // textarea readonly
      textarea.readOnly = 'readonly'
      // textarea remove viewable area
      textarea.style.position = 'absolute'
      textarea.style.left = '-9999px'
      // set textarea value
      textarea.value = el.$value
      // append to body
      document.body.appendChild(textarea)
      // select and copy
      textarea.select()
      const result = document.execCommand('Copy')
      // success
      if(result) {
        console.log('success==', el.$value)
      }
      // remove textarea
      document.body.removeChild(textarea)
    }
    // el add listener
    el.addEventListener('click', el.handler)


  },
  componentUpdated(el, {value}) {
    el.$value = value
  },
  unbind(el) {
    el.removeEventListener('click', el.handler)
  }
}

export default copy
