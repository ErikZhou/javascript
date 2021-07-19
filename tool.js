const Tool = (function () {
    class Tool {
        constructor() {
            if (window.getComputedStyle) {
                this.flag = true;
            } else {
                this.flag = false;
            }
        }
        // 获取节点属性
        getStyle (ele, attr) {
            if (this.flag) {
                return window.getComputedStyle(ele)[attr];
            } else {
                return ele.currentStyle[attr];
            }
        }

        getStyle (ele, attr) {
            // 尝试一段代码   不知道会不会报错
            // 尝试成功 后面代码没有什么事
            // 尝试失败 会报错 被cathch 捕获到  会将错误信息放到err参数里  catch{} 里可以处理这个错误 也可以不处理这个错误对上面的错误代码进行补救  错误不会再浏览器里报错
            try {
                return window.getComputedStyle(ele)[attr];
            } catch (err) {
                return ele.currentStyle[attr];
            }
        }
        // 设置节点css属性
        setStyle (ele, styleObj) {
            for (let attr in styleObj) {

                ele.style[attr] = styleObj[attr];
            }
        }
        // 设置cookie
        setCookie (key, value, second, path = '/') {
            let data = new Date();
            date.setTime(date.getTime() - 8 * 3600 * 1000 + second * 1000);
            document.cookie = `${key}=${value};expires=${date};path=${path}`;
        }
    }
    var tool;
    return (function () {
        if (!tool) {
            tool = new Tool();
        }
        return tool;
    })();
})();
// var f = tool();
// var t = f();

// var t = Tool();
// console.log(t);
// try {
//     console.log(as);

// } catch (err) {
//     console.log(err);

// }
// console.log(123);

