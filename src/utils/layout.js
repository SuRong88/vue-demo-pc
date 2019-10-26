import Vue from 'vue'
import moment from 'moment' // 若需要处理日期
import md5 from 'md5' // 若需要md5密码
export default {
	install: function(Vue) {
		let loading = null;
		// 错误提示
		Vue.prototype.errorToast = function(msg, duration = 3000) {
				if (msg) {
					this.$message({
						message: msg,
						type: 'error',
						duration: duration,
						showClose: true
					});
				}
			},
			// 成功提示
			Vue.prototype.successToast = function(msg, duration = 3000) {
				if (msg) {
					this.$message({
						message: msg,
						type: 'success',
						duration: duration,
						showClose: true
					});
				}
			},
			// 加载
			// 显示loading
			Vue.prototype.loading = function(type, text = '加载中...') {
				loading = this.$loading({
					// lock: true,
					text: text,
					background: 'rgba(255,255,255,0.7)'
				});
			},
			// 隐藏loading
			Vue.prototype.loadEnd = function(type) {
				loading.close();
			},
			// 弹窗
			// 注意：原弹窗按钮样式是左取消右确定，但项目UI需要左确定右取消，所以取消与确定的文本和事件对换
			Vue.prototype.wDialog = function(title, content, cancelButtonText, confirmButtonText, showConfirmButton, cb_ok,
				cb_err) {
				this.$confirm(content, title, {
					cancelButtonText: cancelButtonText || '确定',
					confirmButtonText: confirmButtonText || '取消',
					showConfirmButton: showConfirmButton,
					dangerouslyUseHTMLString: true,
					center: true,
					customClass: 'myDialogBox',
					distinguishCancelAndClose: true,
					beforeClose: function(action, instance, done) {
						if (action == 'confirm') {
							done();
						} else if (action == 'close') {
							done();
						} else {
							cb_ok && cb_ok(done);
						}
					}
				}).then(function() {
					cb_err && cb_err();
				}).catch(function() {

				})
			},
			// 指定滚动条位置
			Vue.prototype.wSetScroll = function(top) {
				if (document.documentElement.scrollTop || document.documentElement.scrollTop == 0) {
					document.documentElement.scrollTop = top;
				} else if (window.pageYOffset || window.pageYOffset == 0) {
					window.pageYOffset = top;
				} else if (document.body.scrollTop || document.body.scrollTop == 0) {
					document.body.scrollTop = top;
				}
			},
			// 返顶
			Vue.prototype.wToTop = function() {
				this.wSetScroll(0);
			},
			// md5加密
			Vue.prototype.md5 = function(text) {
				return md5(text)
			},
			// 日期格式化
			Vue.prototype.format = function(time, type) {
				return moment(time).format(type)
			}
	}
}
