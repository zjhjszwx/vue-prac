import { oneOf } from '../../../utils/assist'

export default {
  props: {
    to: {
      type: [Object, String]
    },
    replace: {
      type: Boolean,
      default: false
    },
    target: {
      type: String,
      validator: (value) => {
        return oneOf(value, ['_blank', '_self', '_parent', '_top']);
      },
      default: '_self'
    }
  },
  methods: {
    handleClick(new_window = false) {
      const router = this.$router
      if (new_window) {
        let to = this.to;
        if (router) {
          const current = this.$router;
          // 添加append
        }
        window.open(to)
      } else {
        if (router) {
          this.replace ? this.$router.replace(this.to) : this.$router.push(this.to);
        } else {
          window.location.href = this.to;
        }
      }
    },
    handleCheckClick(event, new_window = false) {
      if (this.to) {
        event.preventDefault()
        this.handleClick(new_window)
      }
    }
  }
}
