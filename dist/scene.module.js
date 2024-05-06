/**
 * @description Suey
 * @about       Lightweight JavaScript UI library.
 * @author      Stephens Nunnally <@stevinz>
 * @license     MIT - Copyright (c) 2024 Stephens Nunnally
 * @source      https://github.com/salinityengine/suey
 * @version     v0.1.27
 */
var img$9 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg width='100%25' height='100%25' viewBox='0 0 512 512' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd%3bclip-rule:evenodd%3bstroke-linejoin:round%3bstroke-miterlimit:2%3b'%3e%3cpath d='M184.001%2c292.65l-119.111%2c-0c-13.193%2c-0 -23.889%2c-10.695 -23.889%2c-23.889l-0%2c-26.85c-0%2c-13.194 10.696%2c-23.889 23.889%2c-23.889l46.704%2c-0.001l31.681%2c0l74.967%2c0l0%2c-78.878l-0%2c-71.489c-0%2c-7.129 2.832%2c-13.965 7.872%2c-19.004c5.038%2c-5.041 11.875%2c-7.873 19.002%2c-7.873l21.767%2c0c7.127%2c0 13.964%2c2.832 19.003%2c7.873c5.04%2c5.039 7.873%2c11.875 7.873%2c19.004l0%2c150.364l150.365%2c0c7.127%2c0 13.964%2c2.833 19.004%2c7.873c5.04%2c5.041 7.872%2c11.876 7.872%2c19.002l-0%2c20.88c-0%2c7.127 -2.832%2c13.963 -7.872%2c19.003c-5.041%2c5.04 -11.877%2c7.87 -19.004%2c7.87l-72.38%2c0l0.003%2c0.003l-77.988%2c0l0%2c154.707c0%2c6.33 -2.514%2c12.4 -6.99%2c16.876c-4.476%2c4.476 -10.546%2c6.99 -16.877%2c6.99l-27.761%2c0c-6.336%2c0 -12.411%2c-2.516 -16.892%2c-6.996c-4.48%2c-4.48 -6.996%2c-10.556 -6.996%2c-16.892l-0%2c-118.1l-0%2c-36.247l-0.001%2c-0.338l-0.339%2c0.001l-33.902%2c-0Z' style='fill:%23e6e6e6%3b'/%3e%3c/svg%3e";

var img$8 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg width='100%25' height='100%25' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd%3bclip-rule:evenodd%3bstroke-linejoin:round%3bstroke-miterlimit:2%3b'%3e%3cpath d='M373.189%2c648.684c-0%2c-0 -237.09%2c-138.996 -258.087%2c-117.999c-20.997%2c20.997 212.331%2c288.419 212.331%2c288.419c1.975%2c3.009 4.284%2c5.857 6.926%2c8.499c10.698%2c10.698 24.796%2c15.945 38.83%2c15.71c14.035%2c0.235 28.132%2c-5.012 38.831%2c-15.71c2.641%2c-2.642 4.95%2c-5.49 6.926%2c-8.499c-0%2c-0 423.255%2c-489.7 496.91%2c-611.246c9.004%2c-14.859 -15.991%2c-40.415 -34.446%2c-27.458c-108.024%2c75.837 -508.221%2c468.284 -508.221%2c468.284Z' style='fill:%23ebebeb%3b'/%3e%3c/svg%3e";

var img$7 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg width='100%25' height='100%25' viewBox='0 0 512 512' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' xmlns:serif='http://www.serif.com/' style='fill-rule:evenodd%3bclip-rule:evenodd%3bstroke-linejoin:round%3bstroke-miterlimit:2%3b'%3e%3cpath d='M386.576%2c386.574c-12.567%2c12.568 -33.514%2c12.568 -46.08%2c0.002l-84.496%2c-84.498l-84.497%2c84.498c-12.566%2c12.566 -33.512%2c12.566 -46.079%2c-0c-12.566%2c-12.568 -12.566%2c-33.513 0%2c-46.079l84.497%2c-84.496l-84.497%2c-84.498c-12.566%2c-12.566 -12.566%2c-33.511 0%2c-46.079c12.567%2c-12.565 33.513%2c-12.565 46.079%2c-0l84.496%2c84.498l84.497%2c-84.498c12.566%2c-12.565 33.512%2c-12.565 46.079%2c-0c12.566%2c12.568 12.566%2c33.513 0%2c46.079l-84.497%2c84.496l84.498%2c84.498c12.565%2c12.566 12.565%2c33.51 0%2c46.077Z' style='fill:white%3b'/%3e%3c/svg%3e";

var img$6 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg width='100%25' height='100%25' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd%3bclip-rule:evenodd%3bstroke-linejoin:round%3bstroke-miterlimit:2%3b'%3e%3c/svg%3e";

var img$5 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg width='100%25' height='100%25' viewBox='0 0 512 512' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd%3bclip-rule:evenodd%3bstroke-linejoin:round%3bstroke-miterlimit:2%3b'%3e%3cpath d='M202.677%2c396c-6.857%2c0 -13.038%2c-4.13 -15.662%2c-10.465c-2.624%2c-6.335 -1.174%2c-13.626 3.674%2c-18.474c44.911%2c-44.911 130.904%2c-130.904 176.025%2c-176.025c4.906%2c-4.906 12.285%2c-6.374 18.696%2c-3.719c6.41%2c2.656 10.59%2c8.911 10.59%2c15.85c0%2c45.295 0%2c117.022 0%2c159.048c0%2c18.659 -15.126%2c33.785 -33.785%2c33.785l-159.538%2c0Z' style='fill:white%3b'/%3e%3cpath d='M303.059%2c116c6.881%2c-0 13.084%2c4.145 15.717%2c10.502c2.634%2c6.357 1.178%2c13.674 -3.687%2c18.54c-43.748%2c43.748 -126.088%2c126.087 -169.914%2c169.913c-4.888%2c4.888 -12.239%2c6.35 -18.625%2c3.705c-6.386%2c-2.645 -10.55%2c-8.877 -10.55%2c-15.789c-0%2c-43.783 -0%2c-112.154 -0%2c-152.928c-0%2c-18.746 15.197%2c-33.943 33.943%2c-33.943l153.116%2c-0Z' style='fill:white%3b'/%3e%3c/svg%3e";

var img$4 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg width='100%25' height='100%25' viewBox='0 0 512 512' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd%3bclip-rule:evenodd%3bstroke-linejoin:round%3bstroke-miterlimit:2%3b'%3e%3cpath d='M256%2c16c132.46%2c-0 240%2c107.54 240%2c240c0%2c132.46 -107.54%2c240 -240%2c240c-132.46%2c0 -240%2c-107.54 -240%2c-240c0%2c-132.46 107.54%2c-240 240%2c-240Zm0%2c57.6c-100.669%2c0 -182.4%2c81.731 -182.4%2c182.4c0%2c100.669 81.731%2c182.4 182.4%2c182.4c100.669%2c0 182.4%2c-81.731 182.4%2c-182.4c0%2c-100.669 -81.731%2c-182.4 -182.4%2c-182.4Z' style='fill:%237f7f7f%3b'/%3e%3cpath d='M256.001%2c320.462c-12.011%2c-0 -21.749%2c-9.737 -21.749%2c-21.749l0%2c-9.225c0%2c-21.468 13.519%2c-40.67 33.639%2c-47.784c15.135%2c-5.352 24.887%2c-20.319 23.715%2c-36.397c-1.284%2c-17.606 -15.538%2c-31.752 -33.157%2c-32.906c-18.636%2c-1.231 -35.239%2c12.228 -37.805%2c30.616c-0.23%2c1.644 -0.346%2c3.329 -0.346%2c5.008c0%2c12.011 -9.737%2c21.749 -21.749%2c21.749c-12.012%2c-0 -21.749%2c-9.738 -21.749%2c-21.749c-0%2c-3.682 0.257%2c-7.389 0.763%2c-11.018c5.698%2c-40.84 42.476%2c-70.72 83.728%2c-68.012c39.162%2c2.565 70.846%2c34.012 73.699%2c73.149c2.593%2c35.571 -19.036%2c68.702 -52.598%2c80.57c-2.776%2c0.981 -4.641%2c3.703 -4.641%2c6.774l-0%2c9.225c-0%2c12.012 -9.738%2c21.749 -21.75%2c21.749Z' style='fill:%237f7f7f%3b'/%3e%3cpath d='M256.001%2c390.135c-14.739%2c0 -26.687%2c-11.948 -26.687%2c-26.687l-0%2c-0.221c-0%2c-14.739 11.948%2c-26.688 26.687%2c-26.688c14.739%2c0 26.688%2c11.949 26.688%2c26.688l-0%2c0.221c0.001%2c14.739 -11.948%2c26.687 -26.688%2c26.687Z' style='fill:%237f7f7f%3b'/%3e%3c/svg%3e";

var img$3 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg width='100%25' height='100%25' viewBox='0 0 512 512' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd%3bclip-rule:evenodd%3bstroke-linejoin:round%3bstroke-miterlimit:2%3b'%3e%3cpath d='M256%2c16c132.46%2c0 240%2c107.54 240%2c240c0%2c132.46 -107.54%2c240 -240%2c240c-132.46%2c0 -240%2c-107.54 -240%2c-240c0%2c-132.46 107.54%2c-240 240%2c-240Zm-0%2c57.6c-100.669%2c0 -182.4%2c81.731 -182.4%2c182.4c0%2c100.669 81.731%2c182.4 182.4%2c182.4c100.669%2c0 182.4%2c-81.731 182.4%2c-182.4c-0%2c-100.669 -81.731%2c-182.4 -182.4%2c-182.4Z' style='fill:%237f7f7f%3b'/%3e%3cpath d='M256%2c140.739c18.48%2c0 33.6%2c15.12 33.6%2c33.6c0%2c18.48 -15.12%2c33.6 -33.6%2c33.6c-18.48%2c0 -33.6%2c-15.12 -33.6%2c-33.6c0%2c-18.48 15.12%2c-33.6 33.6%2c-33.6Z' style='fill:%237f7f7f%3b'/%3e%3cpath d='M256%2c219.364c15.464%2c0 28%2c12.536 28%2c28l0%2c100.511c-0%2c15.464 -12.536%2c28 -28%2c28l-0%2c-0c-15.464%2c-0 -28%2c-12.536 -28%2c-28l0%2c-100.511c0%2c-15.464 12.536%2c-28 28%2c-28l0%2c0Z' style='fill:%237f7f7f%3b'/%3e%3c/svg%3e";

var img$2 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg width='100%25' height='100%25' viewBox='0 0 512 512' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd%3bclip-rule:evenodd%3bstroke-linejoin:round%3bstroke-miterlimit:2%3b'%3e%3cpath d='M335.44%2c16c12.788%2c-0.01 25.064%2c5.091 34.08%2c14.16l112.32%2c112.32c9.069%2c9.016 14.17%2c21.292 14.16%2c34.08l-0%2c158.88c0.01%2c12.788 -5.091%2c25.064 -14.16%2c34.08l-112.32%2c112.32c-9.016%2c9.069 -21.292%2c14.17 -34.08%2c14.16l-158.88%2c-0c-12.788%2c0.01 -25.064%2c-5.091 -34.08%2c-14.16l-112.32%2c-112.32c-9.069%2c-9.016 -14.17%2c-21.292 -14.16%2c-34.08l0%2c-158.88c-0.01%2c-12.788 5.091%2c-25.064 14.16%2c-34.08l112.32%2c-112.32c9.016%2c-9.069 21.292%2c-14.17 34.08%2c-14.16l158.88%2c0Zm-259.497%2c162.155c-1.5%2c1.5 -2.343%2c3.535 -2.343%2c5.657c-0%2c19.996 -0%2c124.38 -0%2c144.376c-0%2c2.122 0.843%2c4.157 2.343%2c5.657c14.15%2c14.15 88.062%2c88.062 102.212%2c102.212c1.5%2c1.5 3.535%2c2.343 5.657%2c2.343c19.996%2c0 124.38%2c0 144.376%2c0c2.122%2c0 4.157%2c-0.843 5.657%2c-2.343c14.15%2c-14.15 88.062%2c-88.062 102.212%2c-102.212c1.5%2c-1.5 2.343%2c-3.535 2.343%2c-5.657c0%2c-19.996 0%2c-124.38 0%2c-144.376c0%2c-2.122 -0.843%2c-4.157 -2.343%2c-5.657c-14.15%2c-14.15 -88.062%2c-88.062 -102.212%2c-102.212c-1.5%2c-1.5 -3.535%2c-2.343 -5.657%2c-2.343c-19.996%2c-0 -124.38%2c-0 -144.376%2c-0c-2.122%2c-0 -4.157%2c0.843 -5.657%2c2.343c-14.15%2c14.15 -88.062%2c88.062 -102.212%2c102.212Z' style='fill:grey%3b'/%3e%3cpath d='M313.604%2c339.978c-7%2c0.022 -13.725%2c-2.762 -18.662%2c-7.726l-38.941%2c-38.928l-38.941%2c38.947c-4.948%2c4.948 -11.665%2c7.73 -18.662%2c7.73c-14.478%2c-0 -26.392%2c-11.914 -26.392%2c-26.392c0%2c-6.997 2.783%2c-13.714 7.73%2c-18.662l38.941%2c-38.947l-38.947%2c-38.941c-4.948%2c-4.948 -7.73%2c-11.665 -7.73%2c-18.662c0%2c-14.478 11.914%2c-26.392 26.392%2c-26.392c6.997%2c0 13.714%2c2.783 18.662%2c7.73l38.947%2c38.941l38.941%2c-38.947c4.948%2c-4.948 11.665%2c-7.73 18.662%2c-7.73c14.478%2c0 26.392%2c11.914 26.392%2c26.392c-0%2c6.997 -2.783%2c13.714 -7.73%2c18.662l-38.941%2c38.947l38.947%2c38.941c4.946%2c4.946 7.728%2c11.661 7.728%2c18.656c0%2c14.472 -11.909%2c26.381 -26.382%2c26.381c-0.002%2c0 -0.014%2c0 -0.014%2c0Z' style='fill:%237f7f7f%3bfill-rule:nonzero%3b'/%3e%3c/svg%3e";

var img$1 = "data:image/svg+xml,%3c%3fxml version='1.0' encoding='UTF-8' standalone='no'%3f%3e%3c!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3e%3csvg width='100%25' height='100%25' viewBox='0 0 512 512' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xml:space='preserve' style='fill-rule:evenodd%3bclip-rule:evenodd%3bstroke-linejoin:round%3bstroke-miterlimit:2%3b'%3e%3cpath d='M217.561%2c65.75c7.968%2c-13.681 22.607%2c-22.096 38.439%2c-22.096c15.832%2c-0 30.471%2c8.415 38.439%2c22.096l195.518%2c335.729c8.012%2c13.759 8.06%2c30.751 0.125%2c44.554c-7.935%2c13.804 -22.642%2c22.313 -38.564%2c22.313l-391.036%2c0c-15.922%2c0 -30.629%2c-8.509 -38.564%2c-22.313c-7.935%2c-13.803 -7.887%2c-30.795 0.125%2c-44.554l195.518%2c-335.729Zm-136.351%2c340.199c-1.08%2c1.856 -1.087%2c4.148 -0.017%2c6.01c1.071%2c1.861 3.055%2c3.009 5.202%2c3.009c52.447%2c0 286.763%2c0 339.21%2c0c2.147%2c0 4.131%2c-1.148 5.202%2c-3.009c1.07%2c-1.862 1.063%2c-4.154 -0.017%2c-6.01c-26.302%2c-45.163 -143.46%2c-246.339 -169.605%2c-291.233c-1.075%2c-1.845 -3.049%2c-2.98 -5.185%2c-2.98c-2.136%2c-0 -4.11%2c1.135 -5.185%2c2.98c-26.145%2c44.894 -143.303%2c246.07 -169.605%2c291.233Z' style='fill:%237f7f7f%3b'/%3e%3cpath d='M283.679%2c215.374l-7.778%2c93.106c-0.813%2c9.752 -8.939%2c17.298 -18.807%2c17.298c-9.868%2c-0 -17.994%2c-7.546 -18.807%2c-17.298l-7.778%2c-93.106c-1.277%2c-15.556 10.913%2c-28.907 26.585%2c-28.907c14.86%2c0 26.701%2c12.074 26.701%2c26.702c0%2c0.696 0%2c1.509 -0.116%2c2.205Z' style='fill:%237f7f7f%3b'/%3e%3cpath d='M257.093%2c385.058c-12.952%2c0 -23.549%2c-10.597 -23.549%2c-23.549c-0%2c-12.952 10.597%2c-23.549 23.549%2c-23.549c12.952%2c-0 23.549%2c10.597 23.549%2c23.549c0%2c12.952 -10.597%2c23.549 -23.549%2c23.549Z' style='fill:%237f7f7f%3b'/%3e%3c/svg%3e";

var img = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAFUmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgZXhpZjpQaXhlbFhEaW1lbnNpb249IjMyIgogICBleGlmOlBpeGVsWURpbWVuc2lvbj0iMzIiCiAgIGV4aWY6Q29sb3JTcGFjZT0iMSIKICAgdGlmZjpJbWFnZVdpZHRoPSIzMiIKICAgdGlmZjpJbWFnZUxlbmd0aD0iMzIiCiAgIHRpZmY6UmVzb2x1dGlvblVuaXQ9IjIiCiAgIHRpZmY6WFJlc29sdXRpb249IjcyLzEiCiAgIHRpZmY6WVJlc29sdXRpb249IjcyLzEiCiAgIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiCiAgIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIKICAgeG1wOk1vZGlmeURhdGU9IjIwMjEtMTItMTRUMTI6MDE6MTgtMDg6MDAiCiAgIHhtcDpNZXRhZGF0YURhdGU9IjIwMjEtMTItMTRUMTI6MDE6MTgtMDg6MDAiPgogICA8ZGM6dGl0bGU+CiAgICA8cmRmOkFsdD4KICAgICA8cmRmOmxpIHhtbDpsYW5nPSJ4LWRlZmF1bHQiPnJvdGF0ZS12MjwvcmRmOmxpPgogICAgPC9yZGY6QWx0PgogICA8L2RjOnRpdGxlPgogICA8eG1wTU06SGlzdG9yeT4KICAgIDxyZGY6U2VxPgogICAgIDxyZGY6bGkKICAgICAgc3RFdnQ6YWN0aW9uPSJwcm9kdWNlZCIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWZmaW5pdHkgRGVzaWduZXIgMS4xMC40IgogICAgICBzdEV2dDp3aGVuPSIyMDIxLTEyLTE0VDEyOjAxOjE4LTA4OjAwIi8+CiAgICA8L3JkZjpTZXE+CiAgIDwveG1wTU06SGlzdG9yeT4KICA8L3JkZjpEZXNjcmlwdGlvbj4KIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9InIiPz7Eh4STAAABgGlDQ1BzUkdCIElFQzYxOTY2LTIuMQAAKJF1kd8rg1EYxz/biBhbceHCxRK72sTU4kaZNGpJM2W42d79Utu8ve8kuVVuV5S48euCv4Bb5VopIiV3yjVxg17Pu622ZM/pOc/nfM95ns55DlgjWSWnNwxALl/QwsGAaz664Gp6wU47TtwQU3R1bGYmRF37vMdixluvWav+uX+tNZHUFbA0C48qqlYQnhQOrRVUk3eEO5VMLCF8JuzR5ILCd6YeL/Oryekyf5usRcLjYHUKu9I1HK9hJaPlhOXl9Oayq0rlPuZL7Mn83KzEHvFudMIECeBiignG8TPIiMx+vPjolxV18gdK+dOsSK4is8o6GsukyVDAI+qqVE9KTImelJFl3ez/377qqSFfubo9AI3PhvHeB03b8FM0jK8jw/g5BtsTXOar+SuHMPwherGq9R6AYxPOr6pafBcutqDrUY1psZJkE7emUvB2Cm1R6LiBlsVyzyr7nDxAZEO+6hr29sEt5x1LvyX7Z8giEquKAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC2klEQVRYhe2WT0jTYRjHn9c19dCm4EGhi9ghsWYqm0MGOcTTbhIWQZfhQUSkU5YIQ3AdAqFr0CnRtDxEhsQQkS6Ctj94kRGKHiIvyQJN3X7j9+nQNpqb5n7TLvqF9/Y83+/3fd73fd5H5BIXHcpoInBNROwickVEvopIVCmlnZWxfIIK6Ac+Atvkx1vADdQDL4D6sxJvAL4kEglmZ2fx+Xx4PB6qq6upqqqira0Nr9fL/Px82khibW0NIFG0CeApsL+6ukpTUxMicuKy2+0MDQ2hlGJ9fR3geTHiw8lkktHRUcxmc5ZQeXk5TqcTl8tFTU1NXjM+nw9g26i4DdgfGRnJIu3q6iISiaBpWtbhr6ys4PF4smJra2vRdR2gt1DxEiAcDoczO6+oqGBycjKt9w7oA24DN4GBw8NDHA5HThUWFxcBJgs10B+Px7HZbBmi6elpgB/AvTzxj2OxGD09PTidTiwWSybP6/WmTZsLMRCYmZnJkHR3d6dJ7h4TfxV4mQ7SdZ2trS3m5uZYWFgAmCq0ArHBwcGMgdSTenOKPFPqWHqBZ8B7YAq4U4j4dYCOjg5EBIvFYuwiGQXQDVBZWYmI0N7enq7sjfPQKzkP0qLwv48gpwJKqQ0R+Wm320VEZHd3V6LRqIhI+3kYyItCn+GR3LpUk6orxkB/PB6nsbHxaCPaAe6fkPcI2Eu16T3giVEDJUAoEolkWrHVamViYiJfK3YAA8AnXdcZGxujrKwMv98PoAEtRk3cOu4zCofDWZ/RwcEBS0tLdHZ2ZsUuLy8DvDJkIGViOJlM4vf7KS0tzfmOW1tbaW5uzvmqrVYr4+PjxVXgLxNPgF+nHUhcLhebm5vp+/LgX/ynGkqBBhF5rWmaPRAISDAYlGAwKKFQSMxmszgcjsxyu91iMpk+i8hDpdQ3oxvPZyI9lH4AvpOLDf4MpX2F8BY7lreISFJEVpRSO0a5LnGx8RuE2whaFVdzbQAAAABJRU5ErkJggg==";

const IMAGE_ADD = img$9;
const IMAGE_CHECK = img$8;
const IMAGE_CLOSE = img$7;
const IMAGE_EMPTY = img$6;
const IMAGE_EXPAND = img$5;
const IMAGE_QUESTION = img$4;
const IMAGE_INFO = img$3;
const IMAGE_ERROR = img$2;
const IMAGE_WARNING = img$1;
const CURSOR_ROTATE = img;
const GRID_SIZE = 25;
const MOUSE_CLICK = 500;
const MOUSE_SLOP_SMALL = 2;
const MOUSE_SLOP_LARGE = 5;
const TOOLTIP_Y_OFFSET = '0.3em';
const BACKGROUNDS = {
    DARK:               0,
    MID:                1,
    LIGHT:              2,
    FADED:              3,
};
const THEMES = {
    CLASSIC:            0x00aacc,
    STEEL:              0x00c8c3,
    NAVY:               0x1a48cf,
    GRAPE:              0x960ef4,
    FLAMINGO:           0xff13ed,
    RUST:               0xaf1c19,
    CARROT:             0xfe7700,
    COFFEE:             0xb16f1b,
    GOLDEN:             0xd1d855,
    EMERALD:            0x1aca22,
    RANDOM:             -1,
};
const TRAIT = {
    SHADOW:             'shadow',
    DARKNESS:           'darkness',
    BACKGROUND_DARK:    'background-dark',
    BACKGROUND_LIGHT:   'background-light',
    BUTTON_DARK:        'button-dark',
    BUTTON_LIGHT:       'button-light',
    TEXT_DARK:          'text-dark',
    TEXT:               'text',
    TEXT_LIGHT:         'text-light',
    BLACKLIGHT:         'blacklight',
    DARKLIGHT:          'darklight',
    MIDLIGHT:           'midlight',
    HIGHLIGHT:          'highlight',
    ICON_DARK:          'icon-dark',
    ICON:               'icon',
    ICON_LIGHT:         'icon-light',
    COMPLEMENT:         'complement',
    TRIADIC1:           'triadic1',
    TRIADIC2:           'triadic2',
    TRIADIC3:           'triadic3',
    TRIADIC4:           'triadic4',
    TRIADIC5:           'triadic5',
    TRIADIC6:           'triadic6',
};
const PANEL_STYLES = {
    NONE:           'none',
    SIMPLE:         'simple',
    FANCY:          'fancy',
};
const LEFT_SPACING = {
    TABS:           'tabs',
    NORMAL:         'normal',
};
const CLOSE_SIDES = {
    LEFT:           'left',
    RIGHT:          'right',
    BOTH:           'both',
    NONE:           'none',
};
const CORNER_BUTTONS = {
    CLOSE:          'close',
    MAX:            'max',
};
const DOCK_SIDES = {
    LEFT:           'left',
    RIGHT:          'right',
    TOP:            'top',
    BOTTOM:         'bottom',
};
const RESIZERS = {
    TOP:            'top',
    BOTTOM:         'bottom',
    LEFT:           'left',
    RIGHT:          'right',
    TOP_LEFT:       'top-left',
    TOP_RIGHT:      'top-right',
    BOTTOM_LEFT:    'bottom-left',
    BOTTOM_RIGHT:   'bottom-right',
};
const TAB_SIDES = {
    LEFT:           'left',
    RIGHT:          'right',
    TOP:            'top',
    BOTTOM:         'bottom',
};
const QUESTION_ICONS = {
    QUESTION:       'question',
    INFO:           'info',
    ERROR:          'error',
    WARNING:        'warning',
};
const QUESTION_COLORS = {
    ICON:           'icon',
    COMPLEMENT:     'complement',
    TRIADIC1:       'triadic1',
    TRIADIC2:       'triadic2',
    TRIADIC3:       'triadic3',
    TRIADIC4:       'triadic4',
    BLUE:           'blue',
    RED:            'red',
    GREEN:          'green',
    YELLOW:         'yellow',
};
const BUTTON_TYPES = {
    OKAY:           { text: 'Okay',     value: 0 },
    YES:            { text: 'Yes',      value: 1 },
    NO:             { text: 'No',       value: 2 },
    CANCEL:         { text: 'Cancel',   value: 3 },
};
const GRAPH_LINE_TYPES = {
    STRAIGHT:       'straight',
    CURVE:          'curve',
    ZIGZAG:         'zigzag',
};
const GRAPH_GRID_TYPES = {
    LINES:          'lines',
    DOTS:           'dots',
};
const NODE_TYPES = {
    INPUT:          'input',
    OUTPUT:         'output',
};

class Css {
    static getVariable(variable, element) {
        variable = String(variable);
        if (!variable.startsWith('--')) variable = '--' + variable;
        if (element && element.isElement) element = element.dom;
        if (!element || !(element instanceof HTMLElement)) {
            element = document.querySelector(':root');
        }
        return getComputedStyle(element).getPropertyValue(variable);
    }
    static setVariable(variable, valueAsString, element) {
        variable = String(variable);
        if (!variable.startsWith('--')) variable = '--' + variable;
        if (element && element.isElement) element = element.dom;
        if (!element || !(element instanceof HTMLElement)) {
            element = document.querySelector(':root');
        }
        element.style.setProperty(variable, valueAsString);
    }
    static baseSize() {
        return parseFloat(Css.getVariable('--base-size'));
    }
    static fontSize(element = document.body) {
        if (element && element.isElement) element = element.dom;
        let size = getComputedStyle(element).fontSize;
        if (size == null || Number.isNaN(size) || !Number.isFinite(size)) size = getComputedStyle(document.body).fontSize;
        return parseFloat(size);
    }
    static guiScale(element = document.body) {
        if (element && element.isElement) element = element.dom;
        return Css.fontSize(element) / Css.baseSize();
    }
    static getTextWidth(text, font) {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        ctx.font = font;
        return ctx.measureText(text).width;
    }
    static getFontCssFromElement(element = document.body) {
        if (element && element.isElement) element = element.dom;
        const fontWeight = getComputedStyle(element).fontWeight || 'normal';
        const fontSize = getComputedStyle(element).fontSize || '16px';
        const fontFamily = getComputedStyle(element).fontFamily || 'Arial';
        return `${fontWeight} ${fontSize} ${fontFamily}`;
    }
    static parentElementWithCSS(element, cssKey, cssValueOrArrayOfPossibleValues) {
        const values = (Array.isArray(cssValueOrArrayOfPossibleValues)) ? cssValueOrArrayOfPossibleValues : [ cssValueOrArrayOfPossibleValues ];
        cssKey = cssKey.replace(/([A-Z])/g, "-$1").toLowerCase();
        if (element.isElement && element.dom) element = element.dom;
        let parent = element.parentElement;
        while (parent) {
            const defaultView = (parent.ownerDocument || document).defaultView;
            const computed = defaultView.getComputedStyle(parent, null);
            const property = computed.getPropertyValue(cssKey);
            if (property) {
                for (let i = 0; i < values.length; i++) {
                    const cssValue = values[i];
                    if (property == cssValue) return parent;
                }
            }
            parent = parent.parentElement;
        }
        return document.body;
    }
    static setCursor(cursor = '') {
        if (cursor === '') {
            document.body.style.cursor = '';
            document.body.classList.remove('suey-cursor-override');
        } else {
            document.body.style.cursor = cursor;
            document.body.classList.add('suey-cursor-override');
        }
    }
    static parseSize(size) {
        if (typeof size === 'string') {
            if (size.includes('%') ||
                size.includes('px') || size.includes('em') || size.includes('rem') ||
                size.includes('ch') || size.includes('ex') || size.includes('cap') ||
                size.includes('vw') || size.includes('vh') || size.includes('vmin') || size.includes('vmax'))
            {
                return size;
            } else {
                return parseFloat(size).toFixed(2) + 'px';
            }
        } else if (Number.isNaN(size)) {
            return '0';
        } else {
            return parseFloat(size).toFixed(2) + 'px';
        }
    }
    static toEm(pixels, element = document.body) {
        if (element && element.isElement) element = element.dom;
        const parsedSize = Css.parseSize(pixels);
        if (parsedSize.includes('px')) {
            return ((parseFloat(parsedSize) / 10.0) / Css.guiScale(element)) + 'em';
        } else if (parsedSize.includes('em')) {
            return parsedSize;
        }
        console.warn(`Css.toEm(): Could not convert to em, unit passed in: ${pixels}`);
        return size;
    }
    static toPx(size, element = document.body, dimension = 'w' ) {
        if (element && element.isElement) element = element.dom;
        const parsedSize = Css.parseSize(size);
        if (parsedSize.includes('%')) {
            if (element) {
                const parent = Css.parentElementWithCSS(element, 'position', [ 'relative', 'absolute' ]);
                if (parent) {
                    if (dimension === 'w') return (parseFloat(size) * 0.01 * parent.offsetWidth) + 'px';
                    else return (parseFloat(size) * 0.01 * parent.offsetHeight) + 'px';
                }
            }
        } else if (parsedSize.includes('px')) {
            return parsedSize;
        } else if (parsedSize.includes('rem')) {
            return parseInt((parseFloat(size) * 10.0)) + 'px';
        } else if (parsedSize.includes('em')) {
            return parseInt((parseFloat(size) * 10.0 * Css.guiScale(element))) + 'px';
        }
        console.warn(`Css.toPx(): Could not convert to pixels, unit passed in: ${size}`);
        return parseInt(parsedSize) + 'px';
    }
}

class Dom {
    static findElementAt(className, centerX, centerY) {
        const domElements = document.elementsFromPoint(centerX, centerY);
        for (const dom of domElements) {
            if (dom.classList.contains(className)) return dom.suey ?? dom;
        }
        return null;
    }
    static childWithClass(element, className, recursive = true) {
        if (element.isElement && element.dom) element = element.dom;
        const queue = [ element ];
        while (queue.length > 0) {
            const currentElement = queue.shift();
            for (const child of currentElement.children) {
                if (child.classList.contains(className)) return child.suey ?? child;
                if (recursive) queue.push(child);
            }
        }
        return null;
    }
    static childrenWithClass(element, className, recursive = true, searchChildenOfTarget = true) {
        if (element.isElement && element.dom) element = element.dom;
        const children = [];
        const queue = [ element ];
        while (queue.length > 0) {
            const currentElement = queue.shift();
            for (const child of currentElement.children) {
                if (child.classList.contains(className)) {
                    children.push(child.suey ?? child);
                    if (recursive && searchChildenOfTarget) queue.push(child);
                } else {
                    if (recursive) queue.push(child);
                }
            }
        }
        return children;
    }
    static isChildOf(element, possibleParent) {
        if (element.isElement && element.dom) element = element.dom;
        if (possibleParent.isElement && possibleParent.dom) possibleParent = possibleParent.dom;
        let parent = element.parentElement;
        while (parent) {
            if (parent.isSameNode(possibleParent)) return true;
            parent = parent.parentElement;
        }
        return false;
    }
    static isChildOfElementWithClass(element, className) {
        if (element.isElement && element.dom) element = element.dom;
        let parent = element.parentElement;
        while (parent) {
            if (parent.classList.contains(className)) return true;
            parent = parent.parentElement;
        }
        return false;
    }
    static parentElementWithClass(element, className) {
        if (element.isElement && element.dom) element = element.dom;
        let parent = element.parentElement;
        while (parent) {
            if (parent.classList.contains(className)) return parent.suey ?? parent;
            parent = parent.parentElement;
        }
        return null;
    }
    static traverse(element, applyFunction = () => {}, applyToSelf = true) {
        if (element.isElement && element.dom) element = element.dom;
        if (applyToSelf) applyFunction(element);
        for (let i = 0; i < element.children.length; i++) {
            Dom.traverse(element.children[i], applyFunction, true);
        }
    }
    static parentScroller(element) {
        if (!element) return null;
        if (element.isElement && element.dom) element = element.dom;
        if (element.scrollHeight > element.clientHeight) {
            return element;
        } else {
            return Dom.parentScroller(element.parentElement);
        }
    }
    static scrollIntoView(element) {
        const parent = Dom.parentScroller(element);
        if (parent) {
            const onePixel = parseInt(Css.toPx('0.2em'));
            if ((element.offsetTop - parent.offsetTop - onePixel) < parent.scrollTop) {
                parent.scrollTop = element.offsetTop - parent.offsetTop - onePixel;
            } else if (element.offsetTop > (parent.scrollTop + parent.clientHeight + onePixel - parent.offsetTop)) {
                parent.scrollTop = element.offsetTop - parent.clientHeight + element.offsetHeight + onePixel - parent.offsetTop;
            }
        }
    }
}

class Iris {
    static get NAMES() { return HTML_COLORS; }
    static get EXTENDED_NAMES() { return EXTENDED_COLORS; }
    constructor(r = 0xffffff, g, b, format = '') {
        this.isColor = true;
        this.isIris = true;
        this.type = 'Color';
        this.r = 1;
        this.g = 1;
        this.b = 1;
        this.set(r, g, b, format);
    }
    copy(colorObject) {
        return this.set(colorObject);
    }
    clone() {
        return new this.constructor(this.r, this.g, this.b);
    }
    set(r = 0, g, b, format = '') {
        if (arguments.length === 0) {
            return this.set(0);
        } else if (r == undefined || Number.isNaN(r)) {
            if (g || b) console.warn(`Iris.set(): Invalid 'r' value ${r}`);
        } else if (g === undefined && b === undefined) {
            let value = r;
            if (typeof value === 'number' || value === 0) { return this.setHex(value);
            } else if (value && isRGB(value)) { return this.setRGBF(value.r, value.g, value.b);
            } else if (value && isHSL(value)) { return this.setHSL(value.h * 360, value.s, value.l);
            } else if (value && isRYB(value)) { return this.setRYB(value.r * 255, value.y * 255, value.b * 255);
            } else if (Array.isArray(value) && value.length > 2) {
                const offset = (g != null && !Number.isNaN(g) && g > 0) ? g : 0;
                return this.setRGBF(value[offset], value[offset + 1], value[offset + 2])
            } else if (typeof value === 'string') {
                return this.setStyle(value);
            }
        } else {
            if (format == null || format === '') {
                if (Number.isInteger(r) && Number.isInteger(g) && Number.isInteger(b)) {
                    if (r > 1 && g > 1 && b > 1) format = 'rgb';
                }
            }
            switch (format) {
                case 'rgb': return this.setRGB(r, g, b);
                case 'hsl': return this.setHSL(r, g, b);
                case 'ryb': return this.setRYB(r, g, b);
                default:    return this.setRGBF(r, g, b);
            }
        }
        return this;
    }
    setColorName(style) {
        if (style == null || typeof style !== 'string' || style === '') return this;
        style = style.replace(/\s/g, '');
        style = style.toLowerCase();
        const hex = HTML_COLORS[style] ?? EXTENDED_COLORS[style];
        if (hex) return this.setHex(hex);
        console.warn(`Iris.setColorName(): Unknown color ${style}`);
        return this;
    }
    setHex(hexColor) {
        hexColor = Math.floor(hexColor);
        if (hexColor > 0xffffff || hexColor < 0) {
            console.warn(`Iris.setHex(): Given decimal outside of range, value was ${hexColor}`);
            hexColor = clamp(hexColor, 0, 0xffffff);
        }
        const r = (hexColor & 0xff0000) >> 16;
        const g = (hexColor & 0x00ff00) >>  8;
        const b = (hexColor & 0x0000ff);
        return this.setRGB(r, g, b);
    }
    setHSL(h, s, l) {
        h = keepInRange(h, 0, 360);
        s = clamp(s, 0, 1);
        l = clamp(l, 0, 1);
        let c = (1 - Math.abs(2 * l - 1)) * s;
        let x = c * (1 - Math.abs((h / 60) % 2 - 1));
        let m = l - (c / 2);
        let r = 0, g = 0, b = 0;
        if                  (h <  60) { r = c; g = x; b = 0; }
        else if ( 60 <= h && h < 120) { r = x; g = c; b = 0; }
        else if (120 <= h && h < 180) { r = 0; g = c; b = x; }
        else if (180 <= h && h < 240) { r = 0; g = x; b = c; }
        else if (240 <= h && h < 300) { r = x; g = 0; b = c; }
        else if (300 <= h)            { r = c; g = 0; b = x; }
        this.setRGBF(r + m, g + m, b + m);
        return this;
    }
    setRandom() {
        return this.setRGBF(Math.random(), Math.random(), Math.random());
    };
    setRGB(r, g, b) {
        return this.setRGBF(r / 255, g / 255, b / 255);
    }
    setRGBF(r, g, b) {
        this.r = clamp(r, 0, 1);
        this.g = clamp(g, 0, 1);
        this.b = clamp(b, 0, 1);
        return this;
    }
    setRYB(r, y, b) {
        const hexColor = cubicInterpolation(clamp(r, 0, 255), clamp(y, 0, 255), clamp(b, 0, 255), 255, CUBE.RYB_TO_RGB);
        return this.setHex(hexColor);
    }
    setScalar(scalar) {
        return this.setRGB(scalar, scalar, scalar);
    }
    setScalarF(scalar) {
        return this.setRGBF(scalar, scalar, scalar);
    }
    setStyle(style) {
        let m;
        if (m = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(style)) {
            let color;
            const format = m[1];
            const components = m[2];
            switch (format) {
                case 'rgb':
                case 'rgba':
                    if (color = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
                        const r = Math.min(255, parseInt(color[1], 10));
                        const g = Math.min(255, parseInt(color[2], 10));
                        const b = Math.min(255, parseInt(color[3], 10));
                        return this.setRGB(r, g, b);
                    }
                    if (color = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
                        const r = (Math.min(100, parseInt(color[1], 10)) / 100);
                        const g = (Math.min(100, parseInt(color[2], 10)) / 100);
                        const b = (Math.min(100, parseInt(color[3], 10)) / 100);
                        return this.setRGBF(r, g, b);
                    }
                    break;
                case 'hsl':
                case 'hsla':
                    if (color = /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(components)) {
                        const h = parseFloat(color[1]);
                        const s = parseInt(color[2], 10) / 100;
                        const l = parseInt(color[3], 10) / 100;
                        return this.setHSL(h, s, l);
                    }
                    break;
            }
        } else if (m = /^\#([A-Fa-f\d]+)$/.exec(style)) {
            const hex = m[1];
            const size = hex.length;
            if (size === 3) {
                const r = parseInt(hex.charAt(0) + hex.charAt(0), 16);
                const g = parseInt(hex.charAt(1) + hex.charAt(1), 16);
                const b = parseInt(hex.charAt(2) + hex.charAt(2), 16);
                return this.setRGB(r, g, b);
            } else if (size === 6) {
                const r = parseInt(hex.charAt(0) + hex.charAt(1), 16);
                const g = parseInt(hex.charAt(2) + hex.charAt(3), 16);
                const b = parseInt(hex.charAt(4) + hex.charAt(5), 16);
                return this.setRGB(r, g, b);
            }
        }
        if (style && style.length > 0) {
            return this.setColorName(style);
        }
        return this;
    }
    cssString(alpha ) {
        return ('rgb(' + this.rgbString(alpha) + ')');
    }
    hex() {
        return ((this.red() << 16) + (this.green() << 8) + this.blue());
    }
    hexString(inputColorData ){
        if (inputColorData) this.set(inputColorData);
        return Iris.hexString(this.hex());
    }
    static hexString(inputColorData = 0x000000){
        _temp.set(inputColorData);
        return '#' + ('000000' + ((_temp.hex()) >>> 0).toString(16)).slice(-6);
    }
    static randomHex() {
        return _random.setRandom().hex();
    }
    rgbString(alpha) {
        const rgb = this.red() + ', ' + this.green() + ', ' + this.blue();
        return ((alpha !== undefined && alpha !== null) ? String(rgb + ', ' + alpha) : rgb);
    }
    toJSON() {
        return this.hex();
    }
    getHSL(target) {
        if (target && isHSL(target)) {
            target.h = hueF(this.hex());
            target.s = saturation(this.hex());
            target.l = lightness(this.hex());
        } else {
            return { h: hueF(this.hex()), s: saturation(this.hex()), l: lightness(this.hex()) };
        }
    }
    getRGB(target) {
        if (target && isHSL(target)) {
            target.r = this.r;
            target.g = this.g;
            target.b = this.b;
        } else {
            return { r: this.r, g: this.g, b: this.b };
        }
    }
    getRYB(target) {
        let rybAsHex = cubicInterpolation(this.r, this.g, this.b, 1.0, CUBE.RGB_TO_RYB);
        if (target && isRYB(target)) {
            target.r = redF(rybAsHex);
            target.y = greenF(rybAsHex);
            target.b = blueF(rybAsHex);
            return target;
        }
        return {
            r: redF(rybAsHex),
            y: greenF(rybAsHex),
            b: blueF(rybAsHex)
        };
    }
    toArray(array = [], offset = 0) {
        array[offset] = this.r;
        array[offset + 1] = this.g;
        array[offset + 2] = this.b;
        return array;
    }
    red() { return clamp(Math.floor(this.r * 255), 0, 255); }
    green() { return clamp(Math.floor(this.g * 255), 0, 255); }
    blue() { return clamp(Math.floor(this.b * 255), 0, 255); }
    redF() { return this.r; }
    greenF() { return this.g; }
    blueF() { return this.b; }
    hue() { return hue(this.hex()); }
    saturation() { return saturation(this.hex()); }
    lightness() { return lightness(this.hex()); }
    hueF() { return hueF(this.hex()); }
    hueRYB() {
        for (let i = 1; i < RYB_OFFSET.length; i++) {
            if (RYB_OFFSET[i] > this.hue()) return i - 2;
        }
    }
    add(color) {
        if (!color.isColor) console.warn(`Iris.add(): Missing 'color' object`);
        return this.setRGBF(this.r + color.r, this.g + color.g, this.b + color.b);
    }
    addScalar(scalar) {
        return this.setRGB(this.red() + scalar, this.green() + scalar, this.blue() + scalar);
    }
    addScalarF(scalar) {
        return this.setRGBF(this.r + scalar, this.g + scalar, this.b + scalar);
    }
    brighten(amount = 0.5  ) {
        let h = hue(this.hex());
        let s = saturation(this.hex());
        let l = lightness(this.hex());
        l = l + ((1.0 - l) * amount);
        this.setHSL(h, s, l);
        return this;
    }
    darken(amount = 0.5  ) {
        let h = hue(this.hex());
        let s = saturation(this.hex());
        let l = lightness(this.hex()) * amount;
        return this.setHSL(h, s, l);
    }
    greyscale(percent = 1.0, format = 'luminosity') { return this.grayscale(percent, format) }
    grayscale(percent = 1.0, format = 'luminosity') {
        let gray = 0;
        switch (format) {
            case 'luminosity':
                gray = (this.r * 0.21) + (this.g * 0.72) + (this.b * 0.07);
            case 'average':
            default:
                gray = (this.r + this.g + this.b) / 3;
        }
        percent = clamp(percent, 0, 1);
        const r = (this.r * (1.0 - percent)) + (percent * gray);
        const g = (this.g * (1.0 - percent)) + (percent * gray);
        const b = (this.b * (1.0 - percent)) + (percent * gray);
        return this.setRGBF(r, g, b);
    }
    hslOffset(h, s, l) {
        return this.setHSL(this.hue() + h, this.saturation() + s, this.lightness() + l);
    }
    mix(color, percent = 0.5) {
        if (!color.isColor) console.warn(`Iris.mix(): Missing 'color' object`);
        percent = clamp(percent, 0, 1);
        const r = (this.r * (1.0 - percent)) + (percent * color.r);
        const g = (this.g * (1.0 - percent)) + (percent * color.g);
        const b = (this.b * (1.0 - percent)) + (percent * color.b);
        return this.setRGBF(r, g, b);
    }
    multiply(color) {
        if (!color.isColor) console.warn(`Iris.multiply(): Missing 'color' object`);
        return this.setRGBF(this.r * color.r, this.g * color.g, this.b * color.b);
    }
    multiplyScalar(scalar) {
        return this.setRGBF(this.r * scalar, this.g * scalar, this.b * scalar);
    }
    rgbComplementary() {
        return this.rgbRotateHue(180);
    }
    rgbRotateHue(degrees = 90) {
        const newHue = keepInRange(this.hue() + degrees);
        return this.setHSL(newHue, this.saturation(), this.lightness());
    }
    rybAdjust() {
        return this.setHSL(hue(matchSpectrum(this.hue(), SPECTRUM.RYB)), this.saturation(), this.lightness());
    }
    rybComplementary() {
        return this.rybRotateHue(180);
    }
    rybRotateHue(degrees = 90) {
        const newHue = keepInRange(this.hueRYB() + degrees);
        return this.setHSL(hue(matchSpectrum(newHue, SPECTRUM.RYB)), this.saturation(), this.lightness());
    }
    subtract(color) {
        if (!color.isColor) console.warn(`Iris.subtract(): Missing 'color' object`);
        return this.setRGBF(this.r - color.r, this.g - color.g, this.b - color.b);
    }
    equals(color) {
        if (!color.isColor) console.warn(`Iris.equals(): Missing 'color' object`);
        return (fuzzy(this.r, color.r) && fuzzy(this.g, color.g) && fuzzy(this.b, color.b));
    }
    isEqual(color) {
        return this.equals(color);
    }
    isDark() {
        const h = this.hue();
        const l = this.lightness();
        return ((l < 0.60 && (h >= 210 || h <= 27)) || (l <= 0.32));
    }
    isLight() {
        return (!this.isDark());
    }
}
function isRGB(object) { return (object.r !== undefined && object.g !== undefined && object.b !== undefined); }
function isHSL(object) { return (object.h !== undefined && object.s !== undefined && object.l !== undefined); }
function isRYB(object) { return (object.r !== undefined && object.y !== undefined && object.b !== undefined); }
function clamp(value, min, max) { return Math.max(min, Math.min(max, value)); }
function red(hexColor) { return clamp((hexColor & 0xff0000) >> 16, 0, 255); }
function green(hexColor) { return clamp((hexColor & 0x00ff00) >> 8, 0, 255); }
function blue(hexColor) { return clamp((hexColor & 0x0000ff), 0, 255); }
function redF(hexColor) { return red(hexColor) / 255.0; }
function greenF(hexColor) { return green(hexColor) / 255.0; }
function blueF(hexColor) { return blue(hexColor) / 255.0; }
function hue(hexColor) { return hsl(hexColor, 'h'); }
function hueF(hexColor) { return hue(hexColor) / 360; }
function saturation(hexColor) { return hsl(hexColor, 's'); }
function lightness(hexColor) { return hsl(hexColor, 'l'); }
function fuzzy(a, b, tolerance = 0.0015) { return ((a < (b + tolerance)) && (a > (b - tolerance))); }
function keepInRange(value, min = 0, max = 360) {
    while (value >= max) value -= (max - min);
    while (value <  min) value += (max - min);
    return value;
}
let _hslHex, _hslH, _hslS, _hslL;
function hsl(hexColor, channel = 'h') {
    if (hexColor !== _hslHex) {
        if (hexColor === undefined || hexColor === null) return 0;
        const r = redF(hexColor), g = greenF(hexColor), b = blueF(hexColor);
        const max = Math.max(r, g, b), min = Math.min(r, g, b);
        const delta = max - min;
        _hslL = (max + min) / 2;
        if (delta === 0) {
            _hslH = _hslS = 0;
        } else {
            _hslS = (_hslL <= 0.5) ? (delta / (max + min)) : (delta / (2 - max - min));
            switch (max) {
                case r: _hslH = (g - b) / delta + (g < b ? 6 : 0); break;
                case g: _hslH = (b - r) / delta + 2; break;
                case b: _hslH = (r - g) / delta + 4; break;
            }
            _hslH = Math.round(_hslH * 60);
            if (_hslH < 0) _hslH += 360;
        }
        _hslHex = hexColor;
    }
    switch (channel) {
        case 'h': return _hslH;
        case 's': return _hslS;
        case 'l': return _hslL;
        default: console.warn(`Iris.hsl(): Unknown channel (${channel})`);
    }
    return 0;
}
const _interpolate = new Iris();
const _mix1 = new Iris();
const _mix2 = new Iris();
const _random = new Iris();
const _temp = new Iris();
function matchSpectrum(matchHue, spectrum = SPECTRUM.RYB) {
    let colorDegrees = 360 / spectrum.length;
    let degreeCount = colorDegrees;
    let stopCount = 0;
    for (let i = 0; i < spectrum.length; i++) {
        if (matchHue < degreeCount) {
            let percent = (degreeCount - matchHue) / colorDegrees;
            _mix1.set(spectrum[stopCount + 1]);
            return _mix1.mix(_mix2.set(spectrum[stopCount]), percent).hex();
        } else {
            degreeCount = degreeCount + colorDegrees;
            stopCount = stopCount + 1;
        }
    }
}
function cubicInterpolation(v1, v2, v3, scale = 255, table = CUBE.RYB_TO_RGB) {
    v1 = clamp(v1 / scale, 0, 1);
    v2 = clamp(v2 / scale, 0, 1);
    v3 = clamp(v3 / scale, 0, 1);
    const f0 = table[0], f1 = table[1], f2 = table[2], f3 = table[3];
    const f4 = table[4], f5 = table[5], f6 = table[6], f7 = table[7];
    const i1 = 1.0 - v1;
    const i2 = 1.0 - v2;
    const i3 = 1.0 - v3;
    const c0 = i1 * i2 * i3;
    const c1 = i1 * i2 * v3;
    const c2 = i1 * v2 * i3;
    const c3 = v1 * i2 * i3;
    const c4 = i1 * v2 * v3;
    const c5 = v1 * i2 * v3;
    const c6 = v1 * v2 * i3;
    const v7 = v1 * v2 * v3;
    const o1 = c0*f0[0] + c1*f1[0] + c2*f2[0] + c3*f3[0] + c4*f4[0] + c5*f5[0] + c6*f6[0] + v7*f7[0];
    const o2 = c0*f0[1] + c1*f1[1] + c2*f2[1] + c3*f3[1] + c4*f4[1] + c5*f5[1] + c6*f6[1] + v7*f7[1];
    const o3 = c0*f0[2] + c1*f1[2] + c2*f2[2] + c3*f3[2] + c4*f4[2] + c5*f5[2] + c6*f6[2] + v7*f7[2];
    return _interpolate.set(o1, o2, o3, 'gl').hex();
}
const CUBE = {
    RYB_TO_RGB: [
        [ 1.000, 1.000, 1.000 ],
        [ 0.163, 0.373, 0.600 ],
        [ 1.000, 1.000, 0.000 ],
        [ 1.000, 0.000, 0.000 ],
        [ 0.000, 0.660, 0.200 ],
        [ 0.500, 0.000, 0.500 ],
        [ 1.000, 0.500, 0.000 ],
        [ 0.000, 0.000, 0.000 ]
    ],
    RGB_TO_RYB: [
        [ 1.000, 1.000, 1.000 ],
        [ 0.000, 0.000, 1.000 ],
        [ 0.000, 1.000, 0.483 ],
        [ 1.000, 0.000, 0.000 ],
        [ 0.000, 0.053, 0.210 ],
        [ 0.309, 0.000, 0.469 ],
        [ 0.000, 1.000, 0.000 ],
        [ 0.000, 0.000, 0.000 ]
    ]
};
const SPECTRUM = {
    RYB: [
        0xFF0000, 0xFF4900, 0xFF7400, 0xFF9200, 0xFFAA00, 0xFFBF00, 0xFFD300, 0xFFE800,
        0xFFFF00, 0xCCF600, 0x9FEE00, 0x67E300, 0x00CC00, 0x00AF64, 0x009999, 0x0B61A4,
        0x1240AB, 0x1B1BB3, 0x3914AF, 0x530FAD, 0x7109AA, 0xA600A6, 0xCD0074, 0xE40045,
        0xFF0000
    ]
};
const RYB_OFFSET = [
    0,   1,   2,   3,   5,   6,   7,   8,   9,  10,  11,  13,  14,  15,  16,  17,  18,  19,  19,  20,
    21,  21,  22,  23,  23,  24,  25,  25,  26,  27,  27,  28,  28,  29,  29,  30,  30,  31,  31,  32,
    32,  32,  33,  33,  34,  34,  35,  35,  35,  36,  36,  37,  37,  37,  38,  38,  38,  39,  39,  40,
    40,  40,  41,  41,  41,  42,  42,  42,  43,  43,  43,  44,  44,  44,  45,  45,  45,  46,  46,  46,
    47,  47,  47,  47,  48,  48,  48,  49,  49,  49,  50,  50,  50,  51,  51,  51,  52,  52,  52,  53,
    53,  53,  54,  54,  54,  55,  55,  55,  56,  56,  56,  57,  57,  57,  58,  58,  59,  59,  59,  60,
    60,  61,  61,  62,  63,  63,  64,  65,  65,  66,  67,  68,  68,  69,  70,  70,  71,  72,  72,  73,
    73,  74,  75,  75,  76,  77,  77,  78,  79,  79,  80,  81,  82,  82,  83,  84,  85,  86,  87,  88,
    88,  89,  90,  91,  92,  93,  95,  96,  98, 100, 102, 104, 105, 107, 109, 111, 113, 115, 116, 118,
    120, 122, 125, 127, 129, 131, 134, 136, 138, 141, 143, 145, 147, 150, 152, 154, 156, 158, 159, 161,
    163, 165, 166, 168, 170, 171, 173, 175, 177, 178, 180, 182, 184, 185, 187, 189, 191, 192, 194, 196,
    198, 199, 201, 203, 205, 206, 207, 208, 209, 210, 212, 213, 214, 215, 216, 217, 218, 219, 220, 221,
    222, 223, 224, 226, 227, 228, 229, 230, 232, 233, 234, 235, 236, 238, 239, 240, 241, 242, 243, 244,
    245, 246, 247, 248, 249, 250, 251, 251, 252, 253, 254, 255, 256, 257, 257, 258, 259, 260, 260, 261,
    262, 263, 264, 264, 265, 266, 267, 268, 268, 269, 270, 271, 272, 273, 274, 274, 275, 276, 277, 278,
    279, 280, 282, 283, 284, 286, 287, 289, 290, 292, 293, 294, 296, 297, 299, 300, 302, 303, 305, 307,
    309, 310, 312, 314, 316, 317, 319, 321, 323, 324, 326, 327, 328, 329, 330, 331, 332, 333, 334, 336,
    337, 338, 339, 340, 341, 342, 343, 344, 345, 347, 348, 349, 350, 352, 353, 354, 355, 356, 358, 359,
    999
];
const HTML_COLORS = {
    'aliceblue': 0xf0f8ff, 'antiquewhite': 0xfaebd7, 'aqua': 0x00ffff, 'aquamarine': 0x7fffd4,
    'azure': 0xf0ffff, 'beige': 0xf5f5dc, 'bisque': 0xffe4c4, 'black': 0x000000, 'blanchedalmond': 0xffebcd,
    'blue': 0x0000ff, 'blueviolet': 0x8a2be2, 'brown': 0xa52a2a, 'burlywood': 0xdeb887, 'cadetblue': 0x5f9ea0,
    'chartreuse': 0x7fff00, 'chocolate': 0xd2691e, 'coral': 0xff7f50, 'cornflowerblue': 0x6495ed,
    'cornsilk': 0xfff8dc, 'crimson': 0xdc143c, 'cyan': 0x00ffff, 'darkblue': 0x00008b, 'darkcyan': 0x008b8b,
    'darkgoldenrod': 0xb8860b, 'darkgray': 0xa9a9a9, 'darkgreen': 0x006400, 'darkgrey': 0xa9a9a9,
    'darkkhaki': 0xbdb76b, 'darkmagenta': 0x8b008b, 'darkolivegreen': 0x556b2f, 'darkorange': 0xff8c00,
    'darkorchid': 0x9932cc, 'darkred': 0x8b0000, 'darksalmon': 0xe9967a, 'darkseagreen': 0x8fbc8f,
    'darkslateblue': 0x483d8b, 'darkslategray': 0x2f4f4f, 'darkslategrey': 0x2f4f4f, 'darkturquoise': 0x00ced1,
    'darkviolet': 0x9400d3, 'deeppink': 0xff1493, 'deepskyblue': 0x00bfff, 'dimgray': 0x696969,
    'dimgrey': 0x696969, 'dodgerblue': 0x1e90ff, 'firebrick': 0xb22222, 'floralwhite': 0xfffaf0,
    'forestgreen': 0x228b22, 'fuchsia': 0xff00ff, 'gainsboro': 0xdcdcdc, 'ghostwhite': 0xf8f8ff,
    'gold': 0xffd700, 'goldenrod': 0xdaa520, 'gray': 0x808080, 'green': 0x008000, 'greenyellow': 0xadff2f,
    'grey': 0x808080, 'honeydew': 0xf0fff0, 'hotpink': 0xff69b4, 'indianred': 0xcd5c5c, 'indigo': 0x4b0082,
    'ivory': 0xfffff0, 'khaki': 0xf0e68c, 'lavender': 0xe6e6fa, 'lavenderblush': 0xfff0f5, 'lawngreen': 0x7cfc00,
    'lemonchiffon': 0xfffacd, 'lightblue': 0xadd8e6, 'lightcoral': 0xf08080, 'lightcyan': 0xe0ffff,
    'lightgoldenrodyellow': 0xfafad2, 'lightgray': 0xd3d3d3, 'lightgreen': 0x90ee90, 'lightgrey': 0xd3d3d3,
    'lightpink': 0xffb6c1, 'lightsalmon': 0xffa07a, 'lightseagreen': 0x20b2aa, 'lightskyblue': 0x87cefa,
    'lightslategray': 0x778899, 'lightslategrey': 0x778899, 'lightsteelblue': 0xb0c4de, 'lightyellow': 0xffffe0,
    'lime': 0x00ff00, 'limegreen': 0x32cd32, 'linen': 0xfaf0e6, 'magenta': 0xff00ff, 'maroon': 0x800000,
    'mediumaquamarine': 0x66cdaa, 'mediumblue': 0x0000cd, 'mediumorchid': 0xba55d3, 'mediumpurple': 0x9370db,
    'mediumseagreen': 0x3cb371, 'mediumslateblue': 0x7b68ee, 'mediumspringgreen': 0x00fa9a,
    'mediumturquoise': 0x48d1cc, 'mediumvioletred': 0xc71585, 'midnightblue': 0x191970, 'mintcream': 0xf5fffa,
    'mistyrose': 0xffe4e1, 'moccasin': 0xffe4b5, 'navajowhite': 0xffdead, 'navy': 0x000080, 'oldlace': 0xfdf5e6,
    'olive': 0x808000, 'olivedrab': 0x6b8e23, 'orange': 0xffa500, 'orangered': 0xff4500, 'orchid': 0xda70d6,
    'palegoldenrod': 0xeee8aa, 'palegreen': 0x98fb98, 'paleturquoise': 0xafeeee, 'palevioletred': 0xdb7093,
    'papayawhip': 0xffefd5, 'peachpuff': 0xffdab9, 'peru': 0xcd853f, 'pink': 0xffc0cb, 'plum': 0xdda0dd,
    'powderblue': 0xb0e0e6, 'purple': 0x800080, 'rebeccapurple': 0x663399, 'red': 0xff0000,
    'rosybrown': 0xbc8f8f, 'royalblue': 0x4169e1, 'saddlebrown': 0x8b4513, 'salmon': 0xfa8072,
    'sandybrown': 0xf4a460, 'seagreen': 0x2e8b57, 'seashell': 0xfff5ee, 'sienna': 0xa0522d, 'silver': 0xc0c0c0,
    'skyblue': 0x87ceeb, 'slateblue': 0x6a5acd, 'slategray': 0x708090, 'slategrey': 0x708090, 'snow': 0xfffafa,
    'springgreen': 0x00ff7f, 'steelblue': 0x4682b4, 'tan': 0xd2b48c, 'teal': 0x008080, 'thistle': 0xd8bfd8,
    'tomato': 0xff6347, 'turquoise': 0x40e0d0, 'transparent': 0x000000, 'violet': 0xee82ee, 'wheat': 0xf5deb3,
    'white': 0xffffff, 'whitesmoke': 0xf5f5f5, 'yellow': 0xffff00, 'yellowgreen': 0x9acd32
};
const EXTENDED_COLORS = {
    'black': 0x000000, 'charcoal': 0x36454f, 'darkgreen': 0x023020, 'darkpurple': 0x301934, 'jetblack': 0x343434,
    'licorice': 0x1b1212, 'matteblack': 0x28282b, 'midnightblue': 0x191970, 'onyx': 0x353935,
    'aqua': 0x00ffff, 'azure': 0xf0ffff, 'babyblue': 0x89cff0, 'blue': 0x0000ff, 'bluegray': 0x7393b3,
    'bluegreen': 0x088f8f, 'brightblue': 0x0096ff, 'cadetblue': 0x5f9ea0, 'cobaltblue': 0x0047ab,
    'cornflowerblue': 0x6495ed, 'cyan': 0x00ffff, 'darkblue': 0x00008b, 'denim': 0x6f8faf, 'egyptianblue': 0x1434a4,
    'electricblue': 0x7df9ff, 'glaucous': 0x6082b6, 'jade': 0x00a36c, 'indigo': 0x3f00ff, 'iris': 0x5d3fd3,
    'lightblue': 0xadd8e6, 'midnightblue': 0x191970, 'navyblue': 0x000080, 'neonblue': 0x1f51ff,
    'pastelblue': 0xa7c7e7, 'periwinkle': 0xccccff, 'powderblue': 0xb6d0e2, 'robineggblue': 0x96ded1,
    'royalblue': 0x4169e1, 'sapphireblue': 0x0f52ba, 'seafoamgreen': 0x9fe2bf, 'skyblue': 0x87ceeb,
    'steelblue': 0x4682b4, 'teal': 0x008080, 'turquoise': 0x40e0d0, 'ultramarine': 0x0437f2, 'verdigris': 0x40b5ad,
    'zaffre': 0x0818a8,
    'almond': 0xeaddca, 'brass': 0xe1c16e, 'bronze': 0xcd7f32, 'brown': 0xa52a2a, 'buff': 0xdaa06d,
    'burgundy': 0x800020, 'burntsienna': 0xe97451, 'burntumber': 0x6e260e, 'camel': 0xc19a6b, 'chestnut': 0x954535,
    'chocolate': 0x7b3f00, 'cinnamon': 0xd27d2d, 'coffee': 0x6f4e37, 'cognac': 0x834333, 'copper': 0xb87333,
    'cordovan': 0x814141, 'darkbrown': 0x5c4033, 'darkred': 0x8b0000, 'darktan': 0x988558, 'ecru': 0xc2b280,
    'fallow': 0xc19a6b, 'fawn': 0xe5aa70, 'garnet': 0x9a2a2a, 'goldenbrown': 0x966919, 'khaki': 0xf0e68c,
    'lightbrown': 0xc4a484, 'mahogany': 0xc04000, 'maroon': 0x800000, 'mocha': 0x967969, 'nude': 0xf2d2bd,
    'ochre': 0xcc7722, 'olivegreen': 0x808000, 'oxblood': 0x4a0404, 'puce': 0xa95c68, 'redbrown': 0xa52a2a,
    'redochre': 0x913831, 'russet': 0x80461b, 'saddlebrown': 0x8b4513, 'sand': 0xc2b280, 'sienna': 0xa0522d,
    'tan': 0xd2b48c, 'taupe': 0x483c32, 'tuscanred': 0x7c3030, 'wheat': 0xf5deb3, 'wine': 0x722f37,
    'ashgray': 0xb2beb5, 'bluegray': 0x7393b3, 'charcoal': 0x36454f, 'darkgray': 0xa9a9a9, 'glaucous': 0x6082b6,
    'gray': 0x808080, 'gunmetalgray': 0x818589, 'lightgray': 0xd3d3d3, 'pewter': 0x899499, 'platinum': 0xe5e4e2,
    'sagegreen': 0x8a9a5b, 'silver': 0xc0c0c0, 'slategray': 0x708090, 'smoke': 0x848884, 'steelgray': 0x71797e,
    'aqua': 0x00ffff, 'aquamarine': 0x7fffd4, 'armygreen': 0x454b1b, 'bluegreen': 0x088f8f, 'brightgreen': 0xaaff00,
    'cadetblue': 0x5f9ea0, 'cadmiumgreen': 0x097969, 'celadon': 0xafe1af, 'chartreuse': 0xdfff00, 'citrine': 0xe4d00a,
    'cyan': 0x00ffff, 'darkgreen': 0x023020, 'electricblue': 0x7df9ff, 'emeraldgreen': 0x50c878, 'eucalyptus': 0x5f8575,
    'ferngreen': 0x4f7942, 'forestgreen': 0x228b22, 'grassgreen': 0x7cfc00, 'green': 0x008000, 'huntergreen': 0x355e3b,
    'jade': 0x00a36c, 'junglegreen': 0x2aaa8a, 'kellygreen': 0x4cbb17, 'lightgreen': 0x90ee90, 'limegreen': 0x32cd32,
    'lincolngreen': 0x478778, 'malachite': 0x0bda51, 'mintgreen': 0x98fb98, 'mossgreen': 0x8a9a5b,
    'neongreen': 0x0fff50, 'nyanza': 0xecffdc, 'olivegreen': 0x808000, 'pastelgreen': 0xc1e1c1, 'pear': 0xc9cc3f,
    'peridot': 0xb4c424, 'pistachio': 0x93c572, 'robineggblue': 0x96ded1, 'sagegreen': 0x8a9a5b,
    'seagreen': 0x2e8b57, 'seafoamgreen': 0x9fe2bf, 'shamrockgreen': 0x009e60, 'springgreen': 0x00ff7f,
    'teal': 0x008080, 'turquoise': 0x40e0d0, 'vegasgold': 0xc4b454, 'verdigris': 0x40b5ad, 'viridian': 0x40826d,
    'amber': 0xffbf00, 'apricot': 0xfbceb1, 'bisque': 0xf2d2bd, 'brightorange': 0xffac1c, 'bronze': 0xcd7f32,
    'buff': 0xdaa06d, 'burntorange': 0xcc5500, 'burntsienna': 0xe97451, 'butterscotch': 0xe3963e,
    'cadmiumorange': 0xf28c28, 'cinnamon': 0xd27d2d, 'copper': 0xb87333, 'coral': 0xff7f50, 'coralpink': 0xf88379,
    'darkorange': 0x8b4000, 'desert': 0xfad5a5, 'gamboge': 0xe49b0f, 'goldenyellow': 0xffc000, 'goldenrod': 0xdaa520,
    'lightorange': 0xffd580, 'mahogany': 0xc04000, 'mango': 0xf4bb44, 'navajowhite': 0xffdead, 'neonorange': 0xff5f1f,
    'ochre': 0xcc7722, 'orange': 0xffa500, 'pastelorange': 0xfac898, 'peach': 0xffe5b4, 'persimmon': 0xec5800,
    'pinkorange': 0xf89880, 'poppy': 0xe35335, 'pumpkinorange': 0xff7518, 'redorange': 0xff4433, 'safetyorange': 0xff5f15,
    'salmon': 0xfa8072, 'seashell': 0xfff5ee, 'sienna': 0xa0522d, 'sunsetorange': 0xfa5f55, 'tangerine': 0xf08000,
    'terracotta': 0xe3735e, 'yelloworange': 0xffaa33,
    'amaranth': 0x9f2b68, 'bisque': 0xf2d2bd, 'cerise': 0xde3163, 'claret': 0x811331, 'coral': 0xff7f50,
    'coralpink': 0xf88379, 'crimson': 0xdc143c, 'darkpink': 0xaa336a, 'dustyrose': 0xc9a9a6,
    'fuchsia': 0xff00ff, 'hotpink': 0xff69b4, 'lightpink': 0xffb6c1, 'magenta': 0xff00ff, 'millennialpink': 0xf3cfc6,
    'mulberry': 0x770737, 'neonpink': 0xff10f0, 'orchid': 0xda70d6, 'pastelpink': 0xf8c8dc, 'pastelred': 0xfaa0a0,
    'pink': 0xffc0cb, 'pinkorange': 0xf89880, 'plum': 0x673147, 'puce': 0xa95c68, 'purple': 0x800080,
    'raspberry': 0xe30b5c, 'redpurple': 0x953553, 'rose': 0xf33a6a, 'rosegold': 0xe0bfb8, 'rosered': 0xc21e56,
    'rubyred': 0xe0115f, 'salmon': 0xfa8072, 'seashell': 0xfff5ee, 'thistle': 0xd8bfd8, 'watermelonpink': 0xe37383,
    'amaranth': 0x9f2b68, 'brightpurple': 0xbf40bf, 'burgundy': 0x800020, 'byzantium': 0x702963, 'darkpink': 0xaa336a,
    'darkpurple': 0x301934, 'eggplant': 0x483248, 'iris': 0x5d3fd3, 'lavender': 0xe6e6fa, 'lightpurple': 0xcbc3e3,
    'lightviolet': 0xcf9fff, 'lilac': 0xaa98a9, 'mauve': 0xe0b0ff, 'mauvetaupe': 0x915f6d, 'mulberry': 0x770737,
    'orchid': 0xda70d6, 'pastelpurple': 0xc3b1e1, 'periwinkle': 0xccccff, 'plum': 0x673147, 'puce': 0xa95c68,
    'purple': 0x800080, 'quartz': 0x51414f, 'redpurple': 0x953553, 'thistle': 0xd8bfd8, 'tyrianpurple': 0x630330,
    'violet': 0x7f00ff, 'wine': 0x722f37, 'wisteria': 0xbdb5d5,
    'bloodred': 0x880808, 'brickred': 0xaa4a44, 'brightred': 0xee4b2b, 'brown': 0xa52a2a, 'burgundy': 0x800020,
    'burntumber': 0x6e260e, 'burntorange': 0xcc5500, 'burntsienna': 0xe97451, 'byzantium': 0x702963,
    'cadmiumred': 0xd22b2b, 'cardinalred': 0xc41e3a, 'carmine': 0xd70040, 'cerise': 0xde3163, 'cherry': 0xd2042d,
    'chestnut': 0x954535, 'claret': 0x811331, 'coralpink': 0xf88379, 'cordovan': 0x814141, 'crimson': 0xdc143c,
    'darkred': 0x8b0000, 'falured': 0x7b1818, 'garnet': 0x9a2a2a, 'mahogany': 0xc04000, 'maroon': 0x800000,
    'marsala': 0x986868, 'mulberry': 0x770737, 'neonred': 0xff3131, 'oxblood': 0x4a0404, 'pastelred': 0xfaa0a0,
    'persimmon': 0xec5800, 'poppy': 0xe35335, 'puce': 0xa95c68, 'raspberry': 0xe30b5c, 'red': 0xff0000,
    'redbrown': 0xa52a2a, 'redochre': 0x913831, 'redorange': 0xff4433, 'redpurple': 0x953553, 'rosered': 0xc21e56,
    'rubyred': 0xe0115f, 'russet': 0x80461b, 'salmon': 0xfa8072, 'scarlet': 0xff2400, 'sunsetorange': 0xfa5f55,
    'terracotta': 0xe3735e, 'tuscanred': 0x7c3030, 'tyrianpurple': 0x630330, 'venetianred': 0xa42a04,
    'vermillion': 0xe34234, 'wine': 0x722f37,
    'alabaster': 0xedeade, 'beige': 0xf5f5dc, 'bonewhite': 0xf9f6ee, 'cornsilk': 0xfff8dc, 'cream': 0xfffdd0,
    'eggshell': 0xf0ead6, 'ivory': 0xfffff0, 'linen': 0xe9dcc9, 'navajowhite': 0xffdead, 'offwhite': 0xfaf9f6,
    'parchment': 0xfcf5e5, 'peach': 0xffe5b4, 'pearl': 0xe2dfd2, 'seashell': 0xfff5ee, 'vanilla': 0xf3e5ab,
    'white': 0xffffff,
    'almond': 0xeaddca, 'amber': 0xffbf00, 'apricot': 0xfbceb1, 'beige': 0xf5f5dc, 'brass': 0xe1c16e,
    'brightyellow': 0xffea00, 'cadmiumyellow': 0xfdda0d, 'canaryyellow': 0xffff8f, 'chartreuse': 0xdfff00,
    'citrine': 0xe4d00a, 'cornsilk': 0xfff8dc, 'cream': 0xfffdd0, 'darkyellow': 0x8b8000, 'desert': 0xfad5a5,
    'ecru': 0xc2b280, 'flax': 0xeedc82, 'gamboge': 0xe49b0f, 'gold': 0xffd700, 'goldenyellow': 0xffc000,
    'goldenrod': 0xdaa520, 'icterine': 0xfcf55f, 'ivory': 0xfffff0, 'jasmine': 0xf8de7e, 'khaki': 0xf0e68c,
    'lemonyellow': 0xfafa33, 'maize': 0xfbec5d, 'mango': 0xf4bb44, 'mustardyellow': 0xffdb58, 'naplesyellow': 0xfada5e,
    'navajowhite': 0xffdead, 'nyanza': 0xecffdc, 'pastelyellow': 0xfffaa0, 'peach': 0xffe5b4, 'pear': 0xc9cc3f,
    'peridot': 0xb4c424, 'pistachio': 0x93c572, 'saffron': 0xf4c430, 'vanilla': 0xf3e5ab, 'vegasgold': 0xc4b454,
    'wheat': 0xf5deb3, 'yellow': 0xffff00, 'yelloworange': 0xffaa33,
};

class Color {
    constructor(r, g, b) {
        this.set(r, g, b);
    }
    toString() {
        return `rgb(${Math.round(this.r)}, ${Math.round(this.g)}, ${Math.round(this.b)})`;
    }
    set(r, g, b) {
        this.r = this.clamp(r);
        this.g = this.clamp(g);
        this.b = this.clamp(b);
    }
    hueRotate(angle = 0) {
        angle = angle / 180 * Math.PI;
        let sin = Math.sin(angle);
        let cos = Math.cos(angle);
        this.multiply([
            0.213 + cos * 0.787 - sin * 0.213, 0.715 - cos * 0.715 - sin * 0.715, 0.072 - cos * 0.072 + sin * 0.928,
            0.213 - cos * 0.213 + sin * 0.143, 0.715 + cos * 0.285 + sin * 0.140, 0.072 - cos * 0.072 - sin * 0.283,
            0.213 - cos * 0.213 - sin * 0.787, 0.715 - cos * 0.715 + sin * 0.715, 0.072 + cos * 0.928 + sin * 0.072
        ]);
    }
    grayscale(value = 1) {
        this.multiply([
            0.2126 + 0.7874 * (1 - value), 0.7152 - 0.7152 * (1 - value), 0.0722 - 0.0722 * (1 - value),
            0.2126 - 0.2126 * (1 - value), 0.7152 + 0.2848 * (1 - value), 0.0722 - 0.0722 * (1 - value),
            0.2126 - 0.2126 * (1 - value), 0.7152 - 0.7152 * (1 - value), 0.0722 + 0.9278 * (1 - value)
        ]);
    }
    sepia(value = 1) {
        this.multiply([
            0.393 + 0.607 * (1 - value), 0.769 - 0.769 * (1 - value), 0.189 - 0.189 * (1 - value),
            0.349 - 0.349 * (1 - value), 0.686 + 0.314 * (1 - value), 0.168 - 0.168 * (1 - value),
            0.272 - 0.272 * (1 - value), 0.534 - 0.534 * (1 - value), 0.131 + 0.869 * (1 - value)
        ]);
    }
    saturate(value = 1) {
        this.multiply([
            0.213 + 0.787 * value, 0.715 - 0.715 * value, 0.072 - 0.072 * value,
            0.213 - 0.213 * value, 0.715 + 0.285 * value, 0.072 - 0.072 * value,
            0.213 - 0.213 * value, 0.715 - 0.715 * value, 0.072 + 0.928 * value
        ]);
    }
    multiply(matrix) {
        let newR = this.clamp(this.r * matrix[0] + this.g * matrix[1] + this.b * matrix[2]);
        let newG = this.clamp(this.r * matrix[3] + this.g * matrix[4] + this.b * matrix[5]);
        let newB = this.clamp(this.r * matrix[6] + this.g * matrix[7] + this.b * matrix[8]);
        this.r = newR; this.g = newG; this.b = newB;
    }
    brightness(value = 1) {
        this.linear(value);
    }
    contrast(value = 1) {
        this.linear(value, - (0.5 * value) + 0.5);
    }
    linear(slope = 1, intercept = 0) {
        this.r = this.clamp(this.r * slope + intercept * 255);
        this.g = this.clamp(this.g * slope + intercept * 255);
        this.b = this.clamp(this.b * slope + intercept * 255);
    }
    invert(value = 1) {
        this.r = this.clamp((value + this.r / 255 * (1 - 2 * value)) * 255);
        this.g = this.clamp((value + this.g / 255 * (1 - 2 * value)) * 255);
        this.b = this.clamp((value + this.b / 255 * (1 - 2 * value)) * 255);
    }
    hsl() {
        const r = this.r / 255;
        const g = this.g / 255;
        const b = this.b / 255;
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const delta = max - min;
        let h, s, l = (max + min) / 2;
        if (delta === 0) {
            h = s = 0;
        } else {
            s = (l <= 0.5) ? (delta / (max + min)) : (delta / (2 - max - min));
            switch (max) {
                case r: h = (g - b) / delta + (g < b ? 6 : 0); break;
                case g: h = (b - r) / delta + 2; break;
                case b: h = (r - g) / delta + 4; break;
            }
            h /= 6;
        }
        return {
            h: h * 100,
            s: s * 100,
            l: l * 100,
        };
    }
    clamp(value) {
        if (value > 255) {
            value = 255;
        } else if (value < 0) {
            value = 0;
        }
        return value;
    }
}
class Solver {
    constructor() {
        this.target = new Color(0, 0, 0);
        this.targetHSL = { h: 0, s: 0, l: 0 };
        this.reusedColor = new Color(0, 0, 0);
    }
    setTarget(r, g, b) {
        this.target.set(r, g, b);
        this.targetHSL = this.target.hsl();
        this.reusedColor.set(0, 0, 0);
    }
    solve(toBlack = true) {
        const result = this.solveNarrow(this.solveWide());
        return {
            values: result.values,
            loss: result.loss,
            filter: this.css(result.values, toBlack),
        };
    }
    solveWide() {
        const A = 5;
        const c = 15;
        const a = [60, 180, 18000, 600, 1.2, 1.2];
        let best = { loss: Infinity };
        for (let i = 0; best.loss > 25 && i < 3; i++) {
            const initial = [50, 20, 3750, 50, 100, 100];
            const result = this.spsa(A, a, c, initial, 1000);
            if (result.loss < best.loss) {
                best = result;
            }
        }
        return best;
    }
    solveNarrow(wide) {
        const A = wide.loss;
        const c = 2;
        const A1 = A + 1;
        const a = [0.25 * A1, 0.25 * A1, A1, 0.25 * A1, 0.2 * A1, 0.2 * A1];
        return this.spsa(A, a, c, wide.values, 500);
    }
    spsa(A, a, c, values, iters) {
        const alpha = 1;
        const gamma = 0.16666666666666666;
        let best = null;
        let bestLoss = Infinity;
        const deltas = new Array(6);
        const highArgs = new Array(6);
        const lowArgs = new Array(6);
        for (let k = 0; k < iters; k++) {
            const ck = c / Math.pow(k + 1, gamma);
            for (let i = 0; i < 6; i++) {
                deltas[i] = Math.random() > 0.5 ? 1 : -1;
                highArgs[i] = values[i] + ck * deltas[i];
                lowArgs[i] = values[i] - ck * deltas[i];
            }
            const lossDiff = this.loss(highArgs) - this.loss(lowArgs);
            for (let i = 0; i < 6; i++) {
                const g = lossDiff / (2 * ck) * deltas[i];
                const ak = a[i] / Math.pow(A + k + 1, alpha);
                values[i] = fix(values[i] - ak * g, i);
            }
            const loss = this.loss(values);
            if (loss < bestLoss) {
                best = values.slice(0);
                bestLoss = loss;
            }
        }
        return { values: best, loss: bestLoss };
        function fix(value, idx) {
            let max = 100;
            if (idx === 2 ) {
                max = 7500;
            } else if (idx === 4  || idx === 5 ) {
                max = 200;
            }
            if (idx === 3 ) {
                if (value > max) {
                    value %= max;
                } else if (value < 0) {
                    value = max + value % max;
                }
            } else if (value < 0) {
                value = 0;
            } else if (value > max) {
                value = max;
            }
            return value;
        }
    }
    loss(filters) {
        const color = this.reusedColor;
        color.set(0, 0, 0);
        color.invert(filters[0] / 100);
        color.sepia(filters[1] / 100);
        color.saturate(filters[2] / 100);
        color.hueRotate(filters[3] * 3.6);
        color.brightness(filters[4] / 100);
        color.contrast(filters[5] / 100);
        const colorHSL = color.hsl();
        return (
            Math.abs(color.r - this.target.r) +
            Math.abs(color.g - this.target.g) +
            Math.abs(color.b - this.target.b) +
            Math.abs(colorHSL.h - this.targetHSL.h) +
            Math.abs(colorHSL.s - this.targetHSL.s) +
            Math.abs(colorHSL.l - this.targetHSL.l)
        );
    }
    css(filters, toBlack = true) {
        function fmt(idx, multiplier = 1) {
            return Math.round(filters[idx] * multiplier);
        }
        const convertToBlack = toBlack ? 'brightness(0) saturate(100%)' : '';
        return `${convertToBlack} invert(${fmt(0)}%) sepia(${fmt(1)}%) saturate(${fmt(2)}%) hue-rotate(${fmt(3, 3.6)}deg) brightness(${fmt(4)}%) contrast(${fmt(5)}%)`;
    }
}
const _color$1 = new Iris();
const _solver = new Solver();
class ColorizeFilter {
    static fromColor(...colorData) {
        _color$1.set(...colorData);
        _solver.setTarget(_color$1.red(), _color$1.green(), _color$1.blue());
        const result = _solver.solve(true );
        return result.filter;
    }
}

const _clr = new Iris();
const _icon = new Iris();
const _icon_light = new Iris();
const _icon_dark = new Iris();
const _complement = new Iris();
const _triadic1 = new Iris();
const _triadic2 = new Iris();
const _triadic3 = new Iris();
const _triadic4 = new Iris();
const _triadic5 = new Iris();
const _triadic6 = new Iris();
const DEFAULT_CLR = 0x00b4af;
let _background = BACKGROUNDS.DARK;
let _color = DEFAULT_CLR;
let _tint = 0.0;
let _saturation = 0.0;
class ColorScheme {
    static changeBackground(background) {
        if (background === undefined || background === null) return;
        _background = background;
        ColorScheme.updateCSS();
    }
    static changeColor(color, tint, saturation) {
        if (color === undefined || color === null) return;
        _color = _clr.set(color).hex();
        _tint = (tint !== undefined) ? tint : _tint;
        _saturation = (saturation !== undefined) ? saturation : _saturation;
        _icon.set(color);
        _icon_light.copy(_icon).brighten();
        _icon_dark.copy(_icon).darken();
        _complement.copy(_icon).rybRotateHue(180).brighten(0.2);
        _triadic1.copy(_icon).rybRotateHue(120).brighten(0.2);
        _triadic2.copy(_complement).rybRotateHue(120).brighten(0.2);
        _triadic3.copy(_icon).rybRotateHue(90).brighten(0.2);
        _triadic4.copy(_complement).rybRotateHue(90).brighten(0.2);
        _triadic5.copy(_icon).rybRotateHue(60).brighten(0.2);
        _triadic6.copy(_complement).rybRotateHue(60).brighten(0.2);
        ColorScheme.updateCSS();
    }
    static updateCSS() {
        for (const key in TRAIT) {
            const guiColor = TRAIT[key];
            Css.setVariable(`--${guiColor}`, _clr.set(ColorScheme.color(guiColor)).rgbString());
        }
        Css.setVariable('--tint-icon', ColorizeFilter.fromColor(ColorScheme.color(TRAIT.ICON)));
        Css.setVariable('--tint-complement', ColorizeFilter.fromColor(ColorScheme.color(TRAIT.COMPLEMENT)));
        Css.setVariable('--tint-triadic1', ColorizeFilter.fromColor(ColorScheme.color(TRAIT.TRIADIC1)));
        Css.setVariable('--tint-triadic2', ColorizeFilter.fromColor(ColorScheme.color(TRAIT.TRIADIC2)));
        Css.setVariable('--tint-triadic3', ColorizeFilter.fromColor(ColorScheme.color(TRAIT.TRIADIC3)));
        Css.setVariable('--tint-triadic4', ColorizeFilter.fromColor(ColorScheme.color(TRAIT.TRIADIC4)));
        Css.setVariable('--tint-triadic5', ColorizeFilter.fromColor(ColorScheme.color(TRAIT.TRIADIC5)));
        Css.setVariable('--tint-triadic6', ColorizeFilter.fromColor(ColorScheme.color(TRAIT.TRIADIC6)));
        Css.setVariable('--tint-text', ColorizeFilter.fromColor(ColorScheme.color(TRAIT.TEXT)));
        Css.setVariable('--bright', (_background == BACKGROUNDS.LIGHT) ? '0' : '1');
        const startHue = _clr.set(DEFAULT_CLR).hue();
        const newHue = _clr.set(ColorScheme.color(TRAIT.ICON, true )).hue();
        const diffHue = `${newHue - startHue}deg`;
        Css.setVariable('--rotate-hue', diffHue);
    }
    static toString() {
        const COLUMN_LENGTH = 20;
        let output = '';
        for (const key in TRAIT) {
            const guiColor = TRAIT[key];
            _clr.set(ColorScheme.color(guiColor));
            output += `${guiColor}`.padEnd(COLUMN_LENGTH, ' ');
            output += `${_clr.rgbString()}`.padEnd(COLUMN_LENGTH, ' ');
            output += `${_clr.hexString()}\n`;
        }
        return output;
    }
    static color(guiColor, ignoreSaturation = false) {
        _clr.set(0);
        if (guiColor == null) return _clr.hex();
        if (Object.values(TRAIT).includes(guiColor) === false) return _clr.set(guiColor).hex();
        let tint = _tint;
        let saturation = _saturation;
        let darkness = 0;
        let lightness = 0;
        switch (_background) {
            case BACKGROUNDS.DARK:      break;
            case BACKGROUNDS.MID:       tint *= 0.2;    lightness = 0.2;    break;
            case BACKGROUNDS.LIGHT:     break;
            case BACKGROUNDS.FADED:     tint *= 0.1;    lightness = 0.4;    break;
        }
        if (_background == BACKGROUNDS.LIGHT) {
            switch (guiColor) {
                case TRAIT.SHADOW:              _clr.set(140, 140, 140, 'rgb'); break;
                case TRAIT.BACKGROUND_DARK:     _clr.set(180, 180, 180, 'rgb'); break;
                case TRAIT.BACKGROUND_LIGHT:    _clr.set(190, 190, 190, 'rgb'); break;
                case TRAIT.BUTTON_DARK:         _clr.set(200, 200, 200, 'rgb'); break;
                case TRAIT.BUTTON_LIGHT:        _clr.set(210, 210, 210, 'rgb'); break;
                case TRAIT.TEXT_DARK:           _clr.set( 80,  80,  80, 'rgb'); break;
                case TRAIT.TEXT:                _clr.set( 50,  50,  50, 'rgb'); break;
                case TRAIT.TEXT_LIGHT:          _clr.set( 25,  25,  25, 'rgb'); break;
                case TRAIT.BLACKLIGHT:          _clr.set(255, 255, 255, 'rgb'); break;
                case TRAIT.DARKLIGHT:           _clr.set(200, 200, 200, 'rgb'); break;
                case TRAIT.MIDLIGHT:            _clr.set(220, 220, 220, 'rgb'); break;
                case TRAIT.HIGHLIGHT:           _clr.set(  0,   0,   0, 'rgb'); break;
            }
        } else {
            switch (guiColor) {
                case TRAIT.SHADOW:              _clr.set(  0,   0,   0, 'rgb'); tint = 0; break;
                case TRAIT.BACKGROUND_DARK:     _clr.set( 24,  24,  24, 'rgb'); break;
                case TRAIT.BACKGROUND_LIGHT:    _clr.set( 32,  32,  32, 'rgb'); break;
                case TRAIT.BUTTON_DARK:         _clr.set( 40,  40,  40, 'rgb'); break;
                case TRAIT.BUTTON_LIGHT:        _clr.set( 60,  60,  60, 'rgb'); break;
                case TRAIT.TEXT_DARK:           _clr.set(100, 100, 100, 'rgb'); break;
                case TRAIT.TEXT:                _clr.set(190, 190, 190, 'rgb'); break;
                case TRAIT.TEXT_LIGHT:          _clr.set(225, 225, 225, 'rgb'); break;
                case TRAIT.BLACKLIGHT:          _clr.set(  0,   0,   0, 'rgb'); lightness = 0; break;
                case TRAIT.DARKLIGHT:           _clr.set(  8,   8,   8, 'rgb'); lightness = 0; break;
                case TRAIT.MIDLIGHT:            _clr.set( 85,  85,  85, 'rgb'); break;
                case TRAIT.HIGHLIGHT:           _clr.set(255, 255, 255, 'rgb'); break;
            }
            if (_background == BACKGROUNDS.MID && guiColor == TRAIT.DARKLIGHT) {
                _clr.set( 64,  64,  64, 'rgb');
            }
        }
        if (guiColor === TRAIT.DARKNESS) {
            switch (_background) {
                case BACKGROUNDS.DARK:      _clr.set(  0,   0,   0, 'rgb');     break;
                case BACKGROUNDS.MID:       _clr.set( 64,  64,  64, 'rgb');     break;
                case BACKGROUNDS.LIGHT:     _clr.set(128, 128, 128, 'rgb');     break;
                case BACKGROUNDS.FADED:     _clr.set(  0,   0,   0, 'rgb');     break;
            }
        }
        switch (guiColor) {
            case TRAIT.ICON_DARK:   _clr.copy(_icon_dark);  break;
            case TRAIT.ICON:        _clr.copy(_icon);       break;
            case TRAIT.ICON_LIGHT:  _clr.copy(_icon_light); break;
            case TRAIT.COMPLEMENT:  _clr.copy(_complement); break;
            case TRAIT.TRIADIC1:    _clr.copy(_triadic1);   break;
            case TRAIT.TRIADIC2:    _clr.copy(_triadic2);   break;
            case TRAIT.TRIADIC3:    _clr.copy(_triadic3);   break;
            case TRAIT.TRIADIC4:    _clr.copy(_triadic4);   break;
            case TRAIT.TRIADIC5:    _clr.copy(_triadic5);   break;
            case TRAIT.TRIADIC6:    _clr.copy(_triadic6);   break;
        }
        switch (guiColor) {
            case TRAIT.COMPLEMENT:
            case TRAIT.TRIADIC1:
            case TRAIT.TRIADIC2:
            case TRAIT.TRIADIC3:
            case TRAIT.TRIADIC4:
            case TRAIT.TRIADIC5:
            case TRAIT.TRIADIC6:
                saturation = 0.0;
            case TRAIT.ICON_DARK:
            case TRAIT.ICON:
            case TRAIT.ICON_LIGHT:
                tint = 0;
                lightness = 0;
                break;
        }
        if (tint !== 0) _clr.mix(_icon, tint);
        if (lightness !== 0) _clr.brighten(lightness);
        if (darkness !== 0) _clr.darken(darkness);
        if (saturation !== 0 && !ignoreSaturation) _clr.hslOffset(0, saturation, 0);
        return _clr.hex();
    }
}
ColorScheme.changeColor(THEMES.CLASSIC, 0, 0);

class Key {
    static DOWN = -1;
    static UP = 1;
    static RESET = 0;
    constructor() {
        this.pressed = false;
        this.justPressed = false;
        this.justReleased = false;
    }
    update(action) {
        this.justPressed = false;
        this.justReleased = false;
        if (action === Key.DOWN) {
            if (this.pressed === false) this.justPressed = true;
            this.pressed = true;
        } else if(action === Key.UP) {
            if (this.pressed) this.justReleased = true;
            this.pressed = false;
        } else if(action === Key.RESET) {
            this.justReleased = false;
            this.justPressed = false;
        }
    }
    set(justPressed, pressed, justReleased) {
        this.justPressed = justPressed;
        this.pressed = pressed;
        this.justReleased = justReleased;
    }
    reset() {
        this.justPressed = false;
        this.pressed = false;
        this.justReleased = false;
    }
}

class Vector2 {
    constructor(x, y) {
        if (typeof x === 'object') {
            this.x = x.x;
            this.y = x.y;
        } else {
            this.x = x || 0;
            this.y = y || 0;
        }
    }
    set(x, y) {
        if (typeof x === 'object') return this.copy(x);
        this.x = x;
        this.y = y;
        return this;
    }
    setScalar(scalar) {
        this.x = scalar;
        this.y = scalar;
        return this;
    }
    clone() {
        return new Vector2(this.x, this.y);
    }
    copy(vec) {
        this.x = vec.x;
        this.y = vec.y;
        return this;
    }
    add(x, y) {
        if (typeof x === 'object') {
            this.x += x.x;
            this.y += x.y;
        } else {
            this.x += x;
            this.y += y;
        }
        return this;
    }
    addScalar(scalar) {
        this.x += scalar;
        this.y += scalar;
        return this;
    }
    addVectors(a, b) {
        this.x = a.x + b.x;
        this.y = a.y + b.y;
        return this;
    }
    addScaledVector(vec, scale) {
        this.x += vec.x * scale;
        this.y += vec.y * scale;
        return this;
    }
    sub(x, y) {
        if (typeof x === 'object') {
            this.x -= x.x;
            this.y -= x.y;
        } else {
            this.x -= x;
            this.y -= y;
        }
        return this;
    }
    subScalar(scalar) {
        this.x -= scalar;
        this.y -= scalar;
        return this;
    }
    subVectors(a, b) {
        this.x = a.x - b.x;
        this.y = a.y - b.y;
        return this;
    }
    multiply(x, y) {
        if (typeof x === 'object') {
            this.x *= x.x;
            this.y *= x.y;
        } else {
            this.x *= x;
            this.y *= y;
        }
        return this;
    }
    multiplyScalar(scalar) {
        this.x *= scalar;
        this.y *= scalar;
        return this;
    }
    divide(x, y) {
        if (typeof x === 'object') {
            this.x /= x.x;
            this.y /= x.y;
        } else {
            this.x /= x;
            this.y /= y;
        }
        return this;
    }
    divideScalar(scalar) {
        return this.multiplyScalar(1 / scalar);
    }
    min(v) {
        this.x = Math.min(this.x, v.x);
        this.y = Math.min(this.y, v.y);
        return this;
    }
    max(v) {
        this.x = Math.max(this.x, v.x);
        this.y = Math.max(this.y, v.y);
        return this;
    }
    clamp(minv, maxv) {
        this.x = Math.max(minv.x, Math.min(maxv.x, this.x));
        this.y = Math.max(minv.y, Math.min(maxv.y, this.y));
        return this;
    }
    clampScalar(minVal, maxVal) {
        this.x = Math.max(minVal, Math.min(maxVal, this.x));
        this.y = Math.max(minVal, Math.min(maxVal, this.y));
        return this;
    }
    clampLength(min, max) {
        const length = this.length();
        return this.divideScalar(length || 1).multiplyScalar(Math.max(min, Math.min(max, length)));
    }
    floor() {
        this.x = Math.floor(this.x);
        this.y = Math.floor(this.y);
        return this;
    }
    ceil() {
        this.x = Math.ceil(this.x);
        this.y = Math.ceil(this.y);
        return this;
    }
    round() {
        this.x = Math.round(this.x);
        this.y = Math.round(this.y);
        return this;
    }
    negate() {
        this.x = -this.x;
        this.y = -this.y;
        return this;
    }
    dot(v) {
        return this.x * v.x + this.y * v.y;
    }
    cross(v) {
        return this.x * v.y - this.y * v.x;
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y;
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y);
    }
    normalize() {
        return this.divideScalar(this.length() || 1);
    }
    angle(forcePositive) {
        let angle = Math.atan2(this.y, this.x);
        if (forcePositive && angle < 0) angle += 2 * Math.PI;
        return angle;
    }
    angleBetween(v) {
        const dot = this.dot(v);
        const magnitudes = this.length() * v.length();
        const clampedDot = Math.min(Math.max(dot / magnitudes, -1), 1);
        return Math.acos(clampedDot);
    }
    distanceTo(v) {
        return Math.sqrt(this.distanceToSquared(v));
    }
    distanceToSquared(v) {
        const dx = this.x - v.x;
        const dy = this.y - v.y;
        return dx * dx + dy * dy;
    }
    manhattanDistanceTo(v) {
        return Math.abs(this.x - v.x) + Math.abs(this.y - v.y);
    }
    setLength(length) {
        return this.normalize().multiplyScalar(length);
    }
    lerp(v, alpha) {
        this.x += (v.x - this.x) * alpha;
        this.y += (v.y - this.y) * alpha;
        return this;
    }
    equals(v) {
        return ((v.x === this.x) && (v.y === this.y));
    }
    toArray() {
        return [ this.x, this.y ];
    }
    fromArray(array) {
        this.set(array[0], array[1]);
        return this;
    }
    rotateAround(center, angle) {
        const c = Math.cos(angle);
        const s = Math.sin(angle);
        const x = this.x - center.x;
        const y = this.y - center.y;
        this.x = x * c - y * s + center.x;
        this.y = x * s + y * c + center.y;
    }
}

class Pointer {
    static LEFT = 0;
    static MIDDLE = 1;
    static RIGHT = 2;
    static BACK = 3;
    static FORWARD = 4;
    constructor(element) {
        if (!element || !element.isElement) {
            console.error(`Pointer: No Suey Element was provided`);
            return;
        }
        const self = this;
        this._keys = new Array(5);
        this._position = new Vector2(0, 0);
        this._positionUpdated = false;
        this._delta = new Vector2(0, 0);
        this._wheel = 0;
        this._wheelUpdated = false;
        this._doubleClicked = new Array(5);
        this.keys = new Array(5);
        this.position = new Vector2(0, 0);
        this.delta = new Vector2(0, 0);
        this.wheel = 0;
        this.doubleClicked = new Array(5);
        this.pointerInside = false;
        for (let i = 0; i < 5; i++) {
            this._doubleClicked[i] = false;
            this.doubleClicked[i] = false;
            this._keys[i] = new Key();
            this.keys[i] = new Key();
        }
        function updatePosition(x, y, xDiff, yDiff) {
            if (element && element.dom) {
                const rect = element.dom.getBoundingClientRect();
                x -= rect.left;
                y -= rect.top;
            }
            self._position.set(x, y);
            self._delta.x += xDiff;
            self._delta.y += yDiff;
            self._positionUpdated = true;
        }
        function updateKey(button, action) {
            if (button >= 0) self._keys[button].update(action);
        }
        element.on('contextmenu', (event) => {
            event.preventDefault();
            event.stopPropagation();
        });
        element.on('pointermove', (event) => {
            updatePosition(event.clientX, event.clientY, event.movementX, event.movementY);
        });
        element.on('pointerdown',  (event) => {
            event.preventDefault();
            event.stopPropagation();
            element.dom.setPointerCapture(event.pointerId);
            updateKey(event.button, Key.DOWN);
        });
        element.on('pointerup', (event) => {
            element.dom.releasePointerCapture(event.pointerId);
            updateKey(event.button, Key.UP);
        });
        element.on('pointerenter', () => { self.pointerInside = true; });
        element.on('pointerleave', () => { self.pointerInside = false; });
        element.on('wheel', (event) => {
            updatePosition(event.clientX, event.clientY, event.movementX, event.movementY);
            self._wheel = event.deltaY;
            self._wheelUpdated = true;
        });
        element.on('dragstart', (event) => { updateKey(event.button, Key.UP); });
        element.on('dblclick', (event) => { self._doubleClicked[event.button] = true; });
    }
    buttonPressed(button)       { return this.keys[button].pressed; }
    buttonDoubleClicked(button) { return this.doubleClicked[button] }
    buttonJustPressed(button)   { return this.keys[button].justPressed; }
    buttonJustReleased(button)  { return this.keys[button].justReleased; }
    insideDom() {
        return this.pointerInside;
    }
    update() {
        for (let i = 0; i < 5; i++) {
            if (this._keys[i].justPressed && this.keys[i].justPressed) this._keys[i].justPressed = false;
            if (this._keys[i].justReleased && this.keys[i].justReleased) this._keys[i].justReleased = false;
            this.keys[i].set(this._keys[i].justPressed, this._keys[i].pressed, this._keys[i].justReleased);
            if (this._doubleClicked[i] === true) {
                this.doubleClicked[i] = true;
                this._doubleClicked[i] = false;
            } else {
                this.doubleClicked[i] = false;
            }
        }
        if (this._wheelUpdated) {
            this.wheel = this._wheel;
            this._wheelUpdated = false;
        } else {
            this.wheel = 0;
        }
        if (this._positionUpdated) {
            this.delta.copy(this._delta);
            this.position.copy(this._position);
            this._delta.set(0,0);
            this._positionUpdated = false;
        } else {
            this.delta.x = 0;
            this.delta.y = 0;
        }
    }
}

class SignalBinding {
    active = true;
    params = null;
    onceOnly = false;
    constructor(signal, listener, onceOnly, priority = 0) {
        this.listener = listener;
        this.onceOnly = onceOnly;
        this.signal = signal;
        this.priority = priority;
    }
    execute(paramsArr) {
        let handlerReturn;
        let params;
        if (this.active && !!this.listener) {
            params = this.params ? this.params.concat(paramsArr) : paramsArr;
            handlerReturn = this.listener.apply(null, params);
            if (this.onceOnly) this.detach();
        }
        return handlerReturn;
    }
    detach() {
        return this.isBound() ? this.signal.remove(this.listener) : null;
    }
    isBound() {
        return (!!this.signal && !!this.listener);
    }
    isOnce() {
        return this.onceOnly;
    }
    getListener() {
        return this.listener;
    }
    getSignal() {
        return this.signal;
    }
    destroy() {
        delete this.signal;
        delete this.listener;
    }
    toString() {
        return '[SignalBinding onceOnly:' + this.onceOnly +', isBound:'+ this.isBound() +', active:' + this.active + ']';
    }
}
const _enabled = [];
const _missed = {};
let _time = 0;
class Signal {
    VERSION = '1.0.2';
    active = true;
    memorize = false;
    shouldPropagate = true;
    static disableSignals() {
        if (_enabled.length === 0) {
            for (const key in _missed) { if (_missed.hasOwnProperty(key)) delete _missed[key]; }
            _time = 0;
        }
        _enabled.push('false');
    }
    static enableSignals() {
        _enabled.pop();
        return (_enabled.length > 0) ? {} : Object.fromEntries(Object.entries(_missed).sort(([, a], [, b]) => a.time - b.time));
    }
    constructor(moniker) {
        this._bindings = [];
        this._prevParams = null;
        this.moniker = moniker;
    }
    #registerListener(listener, onceOnly, priority) {
        let prevIndex = this.#indexOfListener(listener);
        let binding;
        if (prevIndex !== -1) {
            binding = this._bindings[prevIndex];
            if (binding.isOnce() !== onceOnly) {
                throw new Error('You cannot add' + (onceOnly ? '' : 'Once') +'() then add'+ (!onceOnly ? '' : 'Once') +'() the same listener without removing the relationship first');
            }
        } else {
            binding = new SignalBinding(this, listener, onceOnly, priority);
            let n = this._bindings.length;
            do { --n; } while (this._bindings[n] && binding.priority <= this._bindings[n].priority);
            this._bindings.splice(n + 1, 0, binding);
        }
        if (this.memorize && this._prevParams){
            binding.execute(this._prevParams);
        }
        return binding;
    }
    #indexOfListener(listener) {
        let n = this._bindings.length;
        let cur;
        while (n--) {
            cur = this._bindings[n];
            if (cur.listener === listener) return n;
        }
        return -1;
    }
    has(listener) {
        return this.#indexOfListener(listener) !== -1;
    }
    add(listener, priority) {
        validateListener(listener, 'add');
        return this.#registerListener(listener, false, priority);
    }
    addOnce(listener, priority) {
        validateListener(listener, 'addOnce');
        return this.#registerListener(listener, true, priority);
    }
    remove(listener) {
        validateListener(listener, 'remove');
        const index = this.#indexOfListener(listener);
        if (index !== -1) {
            this._bindings[index].destroy();
            this._bindings.splice(index, 1);
        }
        return listener;
    }
    removeAll() {
        let n = this._bindings.length;
        while (n--) this._bindings[n].destroy();
        this._bindings.length = 0;
    }
    getNumListeners() {
        return this._bindings.length;
    }
    halt() {
        this.shouldPropagate = false;
    }
    dispatch() {
        if (!this.active) return;
        if (_enabled.length > 0) {
            if (!(this.moniker in _missed)) _missed[this.moniker] = { time: 0, args: [] };
            _missed[this.moniker].args.push([ ...arguments ]);
            _missed[this.moniker].time = _time++;
            return;
        }
        let paramsArr = [ ...arguments ];
        let n = this._bindings.length;
        if (this.memorize) this._prevParams = paramsArr;
        if (!n) return;
        const bindings = [ ...this._bindings ];
        this.shouldPropagate = true;
        do { n--; } while (bindings[n] && this.shouldPropagate && bindings[n].execute(paramsArr) !== false);
    }
    forget() {
        this._prevParams = null;
    }
    dispose() {
        this.removeAll();
        delete this._bindings;
        delete this._prevParams;
    }
    toString() {
        return '[Signal active:'+ this.active +' numListeners:'+ this.getNumListeners() +']';
    }
}
function validateListener(listener, fnName) {
    if (typeof listener !== 'function') {
        throw new Error(`'listener' is a required param of ${fnName}() and should be a Function!`);
    }
}

class Element {
    constructor(domElement) {
        if (domElement == null) {
            console.trace('Element.constructor: No HTMLElement provided!');
            domElement = document.createElement('div');
        }
        this.isElement = true;
        let dom = domElement;
        let suey = this;
        this.parent = undefined;
        this.children = [];
        this.slots = [];
        this.contents = function() { return suey; };
        Object.defineProperties(this, {
            dom: {
                get: function() { return dom; },
                set: function(value) { dom = value; },
            },
            id: {
                configurable: true,
                get: function() { return dom.id; },
                set: function(value) { dom.id = value; },
            },
            name: {
                get: function() { return dom.name ?? '???'; },
                set: function(value) { dom.name = String(value); } ,
            },
        });
        Object.defineProperties(dom, {
            suey: {
                get: function() { return suey; },
            },
        });
        this.on('destroy', () => {
            for (const slot of suey.slots) {
                if (typeof slot.detach === 'function') slot.detach();
                if (typeof slot.destroy === 'function') slot.destroy();
            }
            suey.slots.length = 0;
        });
    }
    setID(id) {
        this.id = id;
        return this;
    }
    addSlot(slot) {
        if (slot instanceof SignalBinding) {
            this.slots.push(slot);
        } else {
            console.warn(`Element.addSlot(): ID: '${this.id}' / NAME: '${this.name}' failed to add slot`, slot);
        }
    }
    add(...elements) {
        for (const element of elements) {
            addToParent(this.contents(), element);
        }
        return this;
    }
    addToSelf(...elements) {
        for (const element of elements) {
            addToParent(this, element);
        }
        return this;
    }
    clearContents() {
        destroyChildren(this.contents(), false );
        return this;
    }
    destroy() {
        destroyChildren(this, true );
        return this;
    }
    detach(...elements) {
        const removedElements = [];
        for (const element of elements) {
            let removed = removeFromParent(this.contents(), element, false );
            if (!removed) removed = removeFromParent(this, element, false );
            if (!removed) {  }
            removedElements.push(removed);
        }
        if (removedElements.length === 0) return undefined;
        if (removedElements.length === 1) return removedElements[0];
        return removedElements;
    }
    remove(...elements) {
        const removedElements = [];
        for (const element of elements) {
            let removed = removeFromParent(this.contents(), element, true );
            if (!removed) removed = removeFromParent(this, element, true );
            if (!removed) {  }
            removedElements.push(removed);
        }
        if (removedElements.length === 0) return undefined;
        if (removedElements.length === 1) return removedElements[0];
        return removedElements;
    }
    removeSelf() {
        this.destroy();
        const parent = this.parent ?? this.dom?.parentElement;
        removeFromParent(parent, this, false );
        return this;
    }
    setClass(...classNames) {
        this.dom.className = '';
        return this.addClass(...classNames);
    }
    addClass(...classNames) {
        for (const className of classNames) {
            if (className && typeof className === 'string' && className != '') {
                this.dom.classList.add(className);
            }
        }
        return this;
    }
    hasClass(className) {
        return this.dom.classList.contains(className);
    }
    hasClassWithString(substring) {
        substring = String(substring).toLowerCase();
        const classArray = [ ...this.dom.classList ];
        for (let i = 0; i < classArray.length; i++) {
            const className = classArray[i];
            if (className.toLowerCase().includes(substring)) return true;
        }
        return false;
    }
    removeClass(...classNames) {
        for (const className of classNames) {
            this.dom.classList.remove(className);
        }
        return this;
    }
    toggleClass(className) {
        if (className != null && typeof className === 'string' && className !== '') {
            if (this.hasClass(className)) this.removeClass(className);
            else this.addClass(className);
        }
        return this;
    }
    wantsClass(className, wants = true) {
        if (className && className != '') {
            if (wants) this.addClass(className);
            else this.removeClass(className);
        }
        return this;
    }
    setAttribute(attrib, value) {
        this.dom.setAttribute(attrib, value);
    }
    setDisabled(value = true) {
        if (value) this.addClass('suey-disabled');
        else this.removeClass('suey-disabled');
        this.dom.disabled = value;
        return this;
    }
    selectable(allowSelection) {
        if (allowSelection) this.removeClass('suey-unselectable');
        else this.addClass('suey-unselectable');
        return this;
    }
    hide(dispatchEvent = true) {
        if (this.isHidden()) return;
        if (dispatchEvent) this.dom.dispatchEvent(new Event('hidden'));
        this.addClass('suey-hidden');
        this.setStyle('display', 'none');
    }
    display(dispatchEvent = true) {
        if (this.isDisplayed() && this.hasClass('suey-hidden') === false) return;
        this.removeClass('suey-hidden');
        this.setStyle('display', '');
        if (dispatchEvent) this.dom.dispatchEvent(new Event('displayed'));
    }
    isDisplayed() {
        return getComputedStyle(this.dom).display != 'none';
    }
    isHidden() {
        return getComputedStyle(this.dom).display == 'none';
    }
    allowFocus() {
        this.dom.tabIndex = 0;
    }
    allowMouseFocus() {
        this.dom.tabIndex = -1;
    }
    focus() {
        this.dom.focus();
    }
    blur() {
        this.dom.blur();
    }
    setTextContent(value) {
        if (value != undefined) this.contents().dom.textContent = value;
        return this;
    }
    getTextContent() {
        return this.contents().dom.textContent;
    }
    setInnerText(value) {
        if (value != undefined) this.contents().dom.innerText = value;
        return this;
    }
    getInnerText() {
        return this.contents().dom.innerText;
    }
    setInnerHtml(value) {
        if (value === undefined || value === null) value = '';
        if (typeof this.contents().dom.setHTML === 'function') {
            this.contents().dom.setHTML(value);
        } else {
            this.contents().dom.innerHTML = value;
        }
        return this;
    }
    getInnerHtml() {
        return this.contents().dom.innerHTML;
    }
    setStyle() {
        for (let i = 0, l = arguments.length; i < l; i += 2) {
            const style = arguments[i];
            const value = arguments[i + 1];
            this.dom.style[style] = value;
        }
        return this;
    }
    setContentsStyle() {
        for (let i = 0, l = arguments.length; i < l; i += 2) {
            const style = arguments[i];
            const value = arguments[i + 1];
            this.contents().dom.style[style] = value;
        }
        return this;
    }
    setColor() {
        console.error(`${this.constructor.name}.setColor(): Method must be reimplemented from Element`);
        return this;
    }
    getLeft() {
        return this.dom.getBoundingClientRect().left;
    }
    getTop() {
        return this.dom.getBoundingClientRect().top;
    }
    getWidth() {
        return this.dom.getBoundingClientRect().width;
    }
    getHeight() {
        return this.dom.getBoundingClientRect().height;
    }
    getRelativePosition() {
        const rect = this.dom.getBoundingClientRect();
        let offsetParent = this.dom.offsetParent;
        while (offsetParent && getComputedStyle(offsetParent).position === 'static') {
            offsetParent = offsetParent.offsetParent;
        }
        if (!offsetParent) {
            return { left: rect.left, top: rect.top };
        }
        const parentRect = offsetParent.getBoundingClientRect();
        const relativeLeft = rect.left - parentRect.left;
        const relativeTop = rect.top - parentRect.top;
        return { left: relativeLeft, top: relativeTop };
    }
    traverse(callback, applyToSelf = true) {
        if (applyToSelf) callback(this);
        if (this.children) {
            for (const child of this.children) {
                child.traverse(callback, true);
            }
        }
    }
    traverseAncestors(callback, applyToSelf = true) {
        if (applyToSelf) callback(this);
        if (this.parent) this.parent.traverseAncestors(callback, true);
    }
    on(event, callback, options = {}) {
        if (typeof options !== 'object') options = {};
        if (typeof callback !== 'function') {
            console.warn(`Element.on(): No callback function provided for '${event}'`);
        } else {
            const eventName = event.toLowerCase();
            const eventHandler = callback.bind(this);
            const dom = this.dom;
            if (options.once || eventName === 'destroy') {
                options.once = true;
                dom.addEventListener(eventName, eventHandler, options);
            } else {
                dom.addEventListener(eventName, eventHandler, options);
                dom.addEventListener('destroy', () => dom.removeEventListener(eventName, eventHandler, options), { once: true });
            }
        }
        return this;
    }
}
function addToParent(parent, element) {
    if (!parent || !element) return;
    if (element.isElement) {
        if (parent.isElement && element.parent === parent) return;
        if (element.parent && element.parent.isElement) {
            removeFromParent(element.parent, element, false);
        }
    }
    const parentDom = parent.isElement ? parent.dom : parent;
    const elementDom = element.isElement ? element.dom : element;
    try { if (parentDom) parentDom.appendChild(elementDom); }
    catch (error) {  }
    if (element.isElement) {
        let hasIt = false;
        for (const child of parent.children) {
            if (child.dom.isSameNode(element.dom)) { hasIt = true; break; }
        }
        if (!hasIt) parent.children.push(element);
        element.parent = parent;
    }
    if (elementDom instanceof HTMLElement) {
        elementDom.dispatchEvent(new Event('parent-changed'));
    }
}
function destroyChildren(element, destroySelf = true) {
    if (!element) return;
    const dom = element.isElement ? element.dom : element;
    if (!(dom instanceof HTMLElement)) return;
    if (destroySelf) {
        if (!dom.wasDestroyed) {
            dom.dispatchEvent(new Event('destroy'));
            dom.wasDestroyed = true;
        }
    }
    for (let i = dom.children.length - 1; i >= 0; i--) {
        const child = dom.children[i];
        destroyChildren(child, true );
        try { dom.removeChild(child); } catch (error) {  }
    }
    if (dom.suey && dom.suey.isElement) dom.suey.children.length = 0;
}
function removeFromParent(parent, element, destroy = true) {
    if (!parent || !element) return undefined;
    if (destroy) destroyChildren(element, true );
    if (element.isElement && parent.isElement) {
        for (let i = 0; i < parent.children.length; i++) {
            const child = parent.children[i];
            if (child.dom.isSameNode(element.dom)) {
                parent.children.splice(i, 1);
                element.parent = undefined;
            }
        }
    }
    try {
        if (parent.isElement) parent = parent.dom;
        if (parent instanceof HTMLElement) {
            const removed = parent.removeChild(element.isElement ? element.dom : element);
            return (removed && removed.suey) ? removed.suey : removed;
        }
    } catch (error) {  }
}

class Matrix2 {
    constructor(values) {
        if (Array.isArray(values)) this.m = [ ...values ];
        else this.identity();
    }
    copy(mat) {
        this.m = [ ...mat.m ];
        return this;
    }
    clone() {
        return new Matrix2([ ...this.m ]);
    }
    identity() {
        this.m = [ 1, 0, 0, 1, 0, 0 ];
        return this;
    }
    multiply(mat) {
        const m0 = this.m[0] * mat.m[0] + this.m[2] * mat.m[1];
        const m1 = this.m[1] * mat.m[0] + this.m[3] * mat.m[1];
        const m2 = this.m[0] * mat.m[2] + this.m[2] * mat.m[3];
        const m3 = this.m[1] * mat.m[2] + this.m[3] * mat.m[3];
        const m4 = this.m[0] * mat.m[4] + this.m[2] * mat.m[5] + this.m[4];
        const m5 = this.m[1] * mat.m[4] + this.m[3] * mat.m[5] + this.m[5];
        this.m = [ m0, m1, m2, m3, m4, m5 ];
        return this;
    }
    premultiply(mat) {
        const m0 = mat.m[0] * this.m[0] + mat.m[2] * this.m[1];
        const m1 = mat.m[1] * this.m[0] + mat.m[3] * this.m[1];
        const m2 = mat.m[0] * this.m[2] + mat.m[2] * this.m[3];
        const m3 = mat.m[1] * this.m[2] + mat.m[3] * this.m[3];
        const m4 = mat.m[0] * this.m[4] + mat.m[2] * this.m[5] + mat.m[4];
        const m5 = mat.m[1] * this.m[4] + mat.m[3] * this.m[5] + mat.m[5];
        this.m = [ m0, m1, m2, m3, m4, m5 ];
    }
    compose(px, py, sx, sy, ox, oy, rot) {
        this.m = [ 1, 0, 0, 1, px, py ];
        if (rot !== 0) {
            const c = Math.cos(rot);
            const s = Math.sin(rot);
            this.multiply(new Matrix2([ c, s, -s, c, 0, 0 ]));
        }
        if (sx !== 1 || sy !== 1) this.scale(sx, sy);
        if (ox !== 0 || oy !== 0) this.multiply(new Matrix2([ 1, 0, 0, 1, -ox, -oy ]));
        return this;
    }
    translate(x, y) {
        this.m[4] += this.m[0] * x + this.m[2] * y;
        this.m[5] += this.m[1] * x + this.m[3] * y;
        return this;
    }
    rotate(rad) {
        const c = Math.cos(rad);
        const s = Math.sin(rad);
        const m11 = this.m[0] * c + this.m[2] * s;
        const m12 = this.m[1] * c + this.m[3] * s;
        const m21 = this.m[0] * -s + this.m[2] * c;
        const m22 = this.m[1] * -s + this.m[3] * c;
        this.m[0] = m11;
        this.m[1] = m12;
        this.m[2] = m21;
        this.m[3] = m22;
        return this;
    }
    scale(sx, sy) {
        this.m[0] *= sx;
        this.m[1] *= sx;
        this.m[2] *= sy;
        this.m[3] *= sy;
        return this;
    }
    setPosition(x, y) {
        this.m[4] = x;
        this.m[5] = y;
        return this;
    }
    getScale() {
        return new Vector2(this.m[0], this.m[3]);
    }
    getPosition() {
        return new Vector2(this.m[4], this.m[5]);
    }
    getRotation() {
        return Math.atan2(this.m[1], this.m[0]);
    }
    skew(radianX, radianY) {
        return this.multiply(new Matrix2([ 1, Math.tan(radianY), Math.tan(radianX), 1, 0, 0 ]));
    }
    determinant() {
        return 1 / (this.m[0] * this.m[3] - this.m[1] * this.m[2]);
    }
    getInverse() {
        const d = this.determinant();
        return new Matrix2([ this.m[3] * d, -this.m[1] * d, -this.m[2] * d, this.m[0] * d, d * (this.m[2] * this.m[5] - this.m[3] * this.m[4]), d * (this.m[1] * this.m[4] - this.m[0] * this.m[5]) ]);
    }
    transformPoint(x, y) {
        let px, py;
        if (typeof x === 'object') {
            px = x.x * this.m[0] + x.y * this.m[2] + this.m[4];
            py = x.x * this.m[1] + x.y * this.m[3] + this.m[5];
        } else {
            px = x * this.m[0] + y * this.m[2] + this.m[4];
            py = x * this.m[1] + y * this.m[3] + this.m[5];
        }
        return new Vector2(px, py);
    }
    setContextTransform(context) {
        context.setTransform(this.m[0], this.m[1], this.m[2], this.m[3], this.m[4], this.m[5]);
        return this;
    }
    tranformContext(context) {
        context.transform(this.m[0], this.m[1], this.m[2], this.m[3], this.m[4], this.m[5]);
        return this;
    }
    cssTransform() {
        return 'matrix(' + this.m[0] + ',' + this.m[1] + ',' + this.m[2] + ',' + this.m[3] + ',' + this.m[4] + ',' + this.m[5] + ')';
    }
}

const _lut = [ '00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '0a', '0b', '0c', '0d', '0e', '0f', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '1a', '1b', '1c', '1d', '1e', '1f', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '2a', '2b', '2c', '2d', '2e', '2f', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '3a', '3b', '3c', '3d', '3e', '3f', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '4a', '4b', '4c', '4d', '4e', '4f', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '5a', '5b', '5c', '5d', '5e', '5f', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '6a', '6b', '6c', '6d', '6e', '6f', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '7a', '7b', '7c', '7d', '7e', '7f', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '8a', '8b', '8c', '8d', '8e', '8f', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '9a', '9b', '9c', '9d', '9e', '9f', 'a0', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'a7', 'a8', 'a9', 'aa', 'ab', 'ac', 'ad', 'ae', 'af', 'b0', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'ba', 'bb', 'bc', 'bd', 'be', 'bf', 'c0', 'c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7', 'c8', 'c9', 'ca', 'cb', 'cc', 'cd', 'ce', 'cf', 'd0', 'd1', 'd2', 'd3', 'd4', 'd5', 'd6', 'd7', 'd8', 'd9', 'da', 'db', 'dc', 'dd', 'de', 'df', 'e0', 'e1', 'e2', 'e3', 'e4', 'e5', 'e6', 'e7', 'e8', 'e9', 'ea', 'eb', 'ec', 'ed', 'ee', 'ef', 'f0', 'f1', 'f2', 'f3', 'f4', 'f5', 'f6', 'f7', 'f8', 'f9', 'fa', 'fb', 'fc', 'fd', 'fe', 'ff' ];
class UUID {
    static generate() {
        if (window.crypto && window.crypto.randomUUID) return crypto.randomUUID();
        const d0 = Math.random() * 0xffffffff | 0;
        const d1 = Math.random() * 0xffffffff | 0;
        const d2 = Math.random() * 0xffffffff | 0;
        const d3 = Math.random() * 0xffffffff | 0;
        const uuid = _lut[ d0 & 0xff ] + _lut[ d0 >> 8 & 0xff ] + _lut[ d0 >> 16 & 0xff ] + _lut[ d0 >> 24 & 0xff ] + '-' +
            _lut[ d1 & 0xff ] + _lut[ d1 >> 8 & 0xff ] + '-' + _lut[ d1 >> 16 & 0x0f | 0x40 ] + _lut[ d1 >> 24 & 0xff ] + '-' +
            _lut[ d2 & 0x3f | 0x80 ] + _lut[ d2 >> 8 & 0xff ] + '-' + _lut[ d2 >> 16 & 0xff ] + _lut[ d2 >> 24 & 0xff ] +
            _lut[ d3 & 0xff ] + _lut[ d3 >> 8 & 0xff ] + _lut[ d3 >> 16 & 0xff ] + _lut[ d3 >> 24 & 0xff ];
        return uuid.toLowerCase();
    }
}

class Camera2D {
    constructor() {
        this.uuid = UUID.generate();
        this.position = new Vector2(0, 0);
        this.scale = 1.0;
        this.rotation = 0.0;
        this.matrix = new Matrix2();
        this.inverseMatrix = new Matrix2();
        this.matrixNeedsUpdate = true;
        this.dragButton = Pointer.RIGHT;
        this.rotateButton = Pointer.MIDDLE;
        this.allowDrag = true;
        this.allowScale = true;
        this.allowRotation = true;
        this.rotationPoint = new Vector2(0, 0);
        this.rotationInitial = 0;
    }
    update(pointer) {
        if (this.allowScale && pointer.wheel !== 0) {
            const scaleFactor = pointer.wheel * 0.001 * this.scale;
            const pointerPos = this.inverseMatrix.transformPoint(pointer.position);
            this.scale -= scaleFactor;
            this.position.add(pointerPos.multiplyScalar(scaleFactor));
            this.matrixNeedsUpdate = true;
        }
        if (this.allowRotation) {
            if (pointer.buttonJustPressed(this.rotateButton)) {
                this.rotationPoint.copy(pointer.position);
                this.rotationInitial = this.rotation;
            } else if (pointer.buttonPressed(this.rotateButton)) {
                const point = pointer.position.clone().sub(this.rotationPoint);
                this.rotation = this.rotationInitial + (point.x * 0.01);
                this.matrixNeedsUpdate = true;
            }
        }
        if (this.allowDrag && pointer.buttonPressed(this.dragButton)) {
            const currentPointerPos = this.inverseMatrix.transformPoint(pointer.position.clone());
            const lastPointerPos = this.inverseMatrix.transformPoint(pointer.position.clone().sub(pointer.delta));
            const delta = currentPointerPos.clone().sub(lastPointerPos).multiplyScalar(this.scale);
            this.position.add(delta);
            this.matrixNeedsUpdate = true;
        }
    }
    updateMatrix(centerX, centerY) {
        if (!this.matrixNeedsUpdate) return;
        this.matrix.identity();
        this.matrix.multiply(new Matrix2([ 1, 0, 0, 1, centerX, centerY ]));
        const c = Math.cos(this.rotation);
        const s = Math.sin(this.rotation);
        this.matrix.multiply(new Matrix2([ c, s, -s, c, 0, 0 ]));
        this.matrix.multiply(new Matrix2([ 1, 0, 0, 1, -centerX, -centerY ]));
        this.matrix.multiply(new Matrix2([ 1, 0, 0, 1, this.position.x, this.position.y ]));
        this.matrix.multiply(new Matrix2([ this.scale, 0, 0, this.scale, 0, 0 ]));
        this.inverseMatrix = this.matrix.getInverse();
        this.matrixNeedsUpdate = false;
    }
    lerpPosition(v1, v2, t) {
        this.position.x = (v1.x * (1 - t)) + (v2.x * t);
        this.position.y = (v1.y * (1 - t)) + (v2.y * t);
        this.matrixNeedsUpdate = true;
    }
}

class Box2 {
    constructor(min, max) {
        this.min = min ?? new Vector2(+Infinity, +Infinity);
        this.max = max ?? new Vector2(-Infinity, -Infinity);
    }
    set(min, max) {
        this.min.copy(min);
        this.max.copy(max);
        return this;
    }
    setFromPoints(...points) {
        if (points.length > 0 && Array.isArray(points[0])) points = points[0];
        this.min = new Vector2(+Infinity, +Infinity);
        this.max = new Vector2(-Infinity, -Infinity);
        for (const point of points) {
            this.expandByPoint(point);
        }
        return this;
    }
    setFromCenterAndSize(center, size) {
        const halfSize = new Vector2().copy(size).multiplyScalar(0.5);
        this.min.copy(center).sub(halfSize);
        this.max.copy(center).add(halfSize);
        return this;
    }
    clone() {
        return new Box2().copy(this);
    }
    copy(box) {
        this.min.copy(box.min);
        this.max.copy(box.max);
        return this;
    }
    isEmpty() {
        return (this.max.x < this.min.x) || (this.max.y < this.min.y);
    }
    getCenter(target) {
        target = target ?? new Vector2();
        this.isEmpty() ? target.set(0, 0) : target.addVectors(this.min, this.max).multiplyScalar(0.5);
        return target;
    }
    getSize(target) {
        target = target ?? new Vector2();
        this.isEmpty() ? target.set(0, 0) : target.subVectors(this.max, this.min);
        return target;
    }
    expandByPoint(point) {
        this.min.min(point);
        this.max.max(point);
        return this;
    }
    expandByVector(vector) {
        this.min.sub(vector);
        this.max.add(vector);
        return this;
    }
    expandByScalar(scalar) {
        this.min.addScalar(-scalar);
        this.max.addScalar(scalar);
        return this;
    }
    containsPoint(point) {
        return !(point.x < this.min.x || point.x > this.max.x || point.y < this.min.y || point.y > this.max.y);
    }
    containsBox(box) {
        return this.min.x <= box.min.x && box.max.x <= this.max.x && this.min.y <= box.min.y && box.max.y <= this.max.y;
    }
    intersectsBox(box) {
        return !(box.max.x < this.min.x || box.min.x > this.max.x || box.max.y < this.min.y || box.min.y > this.max.y);
    }
    distanceToPoint(point) {
        let v = new Vector2();
        let clampedPoint = v.copy(point).clamp(this.min, this.max);
        return clampedPoint.sub(point).length();
    }
    intersect(box) {
        this.min.max(box.min);
        this.max.min(box.max);
        return this;
    }
    union(box) {
        this.min.min(box.min);
        this.max.max(box.max);
        return this;
    }
    translate(offset) {
        this.min.add(offset);
        this.max.add(offset);
        return this;
    }
    equals(box) {
        return box.min.equals(this.min) && box.max.equals(this.max);
    }
    toArray() {
        return [ this.min.x, this.min.y, this.max.x, this.max.y ];
    }
    fromArray(array) {
        this.min.set(array[0], array[1]);
        this.max.set(array[2], array[3]);
        return this;
    }
}

class Style {
    static extractColor(color, context) {
        function extractCSSVariableName(str) {
            const regex = /--[a-zA-Z0-9-_]+/;
            const match = str.match(regex);
            return match ? match[0] : null;
        }
        if (typeof color === 'string' && context) {
            const cssVariable = extractCSSVariableName(color, context);
            if (cssVariable) {
                const canvas = context.canvas;
                const computedStyle = getComputedStyle(canvas);
                const computedColor = computedStyle.getPropertyValue(cssVariable);
                return `rgb(${computedColor})`;
            }
        }
        return color;
    }
    constructor() {
        this.cache = null;
        this.needsUpdate = true;
    }
    get(context) {}
}

class ColorStyle extends Style {
    constructor(color = '#000000') {
        super();
        this.color = color;
    }
    get(context) {
        if (this.needsUpdate || this.cache == null) {
            this.cache = Style.extractColor(this.color, context);
            this.needsUpdate = false;
        }
        return this.cache;
    }
}

class Object2D {
    constructor() {
        this.type = 'Object2D';
        this.uuid = UUID.generate();
        this.children = [];
        this.parent = null;
        this.visible = true;
        this.layer = 0;
        this.level = 0;
        this.position = new Vector2(0, 0);
        this.scale = new Vector2(1, 1);
        this.rotation = 0.0;
        this.origin = new Vector2(0, 0);
        this.matrix = new Matrix2();
        this.globalMatrix = new Matrix2();
        this.inverseGlobalMatrix = new Matrix2();
        this.matrixAutoUpdate = true;
        this.matrixNeedsUpdate = true;
        this.boundingBox = new Box2();
        this.masks = [];
        this.draggable = false;
        this.focusable = true;
        this.pointerEvents = true;
        this.ignoreCamera = false;
        this.saveContextState = true;
        this.restoreContextState = true;
        this.pointerInside = false;
    }
    add(...objects) {
        if (objects.length > 0 && Array.isArray(objects[0])) objects = objects[0];
        for (const object of objects) {
            const index = this.children.indexOf(object);
            if (index === -1) {
                object.parent = this;
                object.level = this.level + 1;
                object.traverse(function(child) {
                    if (typeof child.onAdd === 'function') child.onAdd(this);
                });
                this.children.push(object);
            }
        }
        return this;
    }
    remove(object) {
        const index = this.children.indexOf(object);
        if (index === -1) return undefined;
        const child = this.children[index];
        child.parent = null;
        child.level = 0;
        child.traverse(function(child) {
            if (typeof child.onRemove === 'function') child.onRemove(this);
        });
        this.children.splice(index, 1);
        return child;
    }
    getChildByUUID(uuid) {
        return this.getEntityByProperty('uuid', uuid);
    }
    getChildByProperty(property, value) {
        if (this[property] === value) return this;
        for (const child of this.children) {
            const object = child.getChildByProperty(property, value);
            if (object) return object;
        }
        return undefined;
    }
    traverse(callback) {
        if (typeof callback === 'function' && callback(this)) return true;
        for (const child of this.children) {
            if (child.traverse(callback)) return true;
        }
        return false;
    }
    destroy() {
        if (this.parent) this.parent.remove(this);
    }
    computeBoundingBox() {
        return this.boundingBox;
    }
    isInside(point) {
        return false;
    }
    isWorldPointInside(worldPoint, recursive = false) {
        const localPoint = this.inverseGlobalMatrix.transformPoint(worldPoint);
        if (this.isInside(localPoint)) return true;
        if (recursive) {
            for (const child of this.children) {
                if (child.isWorldPointInside(worldPoint, true)) return true;
            }
        }
        return false;
    }
    getWorldPointIntersections(worldPoint, list = []) {
        list = Array.isArray(list) ? list : [];
        const localPoint = this.inverseGlobalMatrix.transformPoint(worldPoint);
        if (this.isInside(localPoint)) list.push(this);
        for (const child of this.children) child.getWorldPointIntersections(worldPoint, list);
        return list;
    }
    getWorldBoundingBox() {
        const box = this.boundingBox;
        const topLeftWorld = this.globalMatrix.transformPoint(box.min);
        const topRightWorld = this.globalMatrix.transformPoint(new Vector2(box.max.x, box.min.y));
        const bottomLeftWorld = this.globalMatrix.transformPoint(new Vector2(box.min.x, box.max.y));
        const bottomRightWorld = this.globalMatrix.transformPoint(box.max);
        const worldBox = new Box2().setFromPoints(topLeftWorld, topRightWorld, bottomLeftWorld, bottomRightWorld);
        return worldBox;
    }
    setPosition(x, y) {
        if (typeof x === 'object' && x.x && x.y) this.position.copy(x);
        else this.position.set(x, y);
        return this;
    }
    updateMatrix(force = false) {
        if (force || this.matrixAutoUpdate || this.matrixNeedsUpdate) {
            this.matrix.compose(this.position.x, this.position.y, this.scale.x, this.scale.y, this.origin.x, this.origin.y, this.rotation);
            this.globalMatrix.copy(this.matrix);
            if (this.parent) this.globalMatrix.premultiply(this.parent.globalMatrix);
            this.inverseGlobalMatrix = this.globalMatrix.getInverse();
            this.matrixNeedsUpdate = false;
        }
    }
    transform(context, camera, canvas, renderer) {
        this.globalMatrix.tranformContext(context);
    }
    onPointerDrag(pointer, camera) {
        const pointerStart = pointer.position.clone();
        const pointerEnd = pointer.position.clone().sub(pointer.delta);
        const parent = this.parent ?? this;
        const worldPositionStart = camera.inverseMatrix.transformPoint(pointerStart);
        const localPositionStart = parent.inverseGlobalMatrix.transformPoint(worldPositionStart);
        const worldPositionEnd = camera.inverseMatrix.transformPoint(pointerEnd);
        const localPositionEnd = parent.inverseGlobalMatrix.transformPoint(worldPositionEnd);
        const delta = localPositionStart.clone().sub(localPositionEnd);
        const mouseSlopThreshold = 2;
        if (pointer.buttonJustPressed(Pointer.LEFT)) {
            this.dragStartPosition = pointer.position.clone();
        } else if (pointer.buttonPressed(Pointer.LEFT)) {
            const manhattanDistance = this.dragStartPosition.manhattanDistanceTo(pointerEnd);
            if (manhattanDistance >= mouseSlopThreshold) {
                this.position.add(delta);
                this.matrixNeedsUpdate = true;
            }
        }
    }
}

class Box extends Object2D {
    constructor() {
        super();
        this.type = 'Box';
        this.box = new Box2(new Vector2(-50, -50), new Vector2(50, 50));
        this.strokeStyle = new ColorStyle('#000000');
        this.lineWidth = 1;
        this.fillStyle = new ColorStyle('#FFFFFF');
        this.computeBoundingBox();
    }
    computeBoundingBox() {
        this.boundingBox.copy(this.box);
    }
    isInside(point) {
        return this.box.containsPoint(point);
    }
    draw(context, camera, canvas) {
        const width = this.box.max.x - this.box.min.x;
        const height = this.box.max.y - this.box.min.y;
        if (this.fillStyle) {
            context.fillStyle = this.fillStyle.get(context);
            context.fillRect(this.box.min.x, this.box.min.y, width, height);
        }
        if (this.strokeStyle) {
            context.lineWidth = this.lineWidth;
            context.strokeStyle = this.strokeStyle.get(context);
            context.strokeRect(this.box.min.x, this.box.min.y, width, height);
        }
    }
}

class Circle extends Object2D {
    constructor() {
        super();
        this.type = 'Circle';
        this.strokeStyle = new ColorStyle('#000000');
        this.lineWidth = 1;
        this.fillStyle = new ColorStyle('#FFFFFF');
        let radius = 10.0;
        const self = this;
        Object.defineProperties(this, {
            radius: {
                get: function() { return radius; },
                set: function(value) {
                    radius = value;
                    self.computeBoundingBox();
                },
            },
        });
    }
    computeBoundingBox() {
        this.boundingBox.min.set(-this.radius, -this.radius);
        this.boundingBox.max.set( this.radius,  this.radius);
    }
    isInside(point) {
        return point.length() <= this.radius;
    }
    draw(context, camera, canvas) {
        context.beginPath();
        context.arc(0, 0, this.radius, 0, 2 * Math.PI);
        if (this.fillStyle) {
            context.fillStyle = this.fillStyle.get(context);
            context.fill();
        }
        if (this.strokeStyle) {
            context.lineWidth = this.lineWidth;
            context.strokeStyle = this.strokeStyle.get(context);
            context.stroke();
        }
    }
}

class Helpers {
    static ALL = 0;
    static RESIZE = 1;
    static ROTATE = 2;
    static resizeTool(object, scene, tools = Helpers.ALL, radius = 5) {
        if (!object || !scene) return console.warn(`Helpers.boxResizeTool(): Object or scene missing from argument list`);
        if (!object.boundingBox) return console.warn(`Helpers.boxResizeTool(): Object missing 'boundingBox' property`);
        function localDelta(pointer, camera) {
            const pointerStart = pointer.position.clone();
            const pointerEnd = pointer.position.clone().sub(pointer.delta);
            const worldPositionStart = camera.inverseMatrix.transformPoint(pointerStart);
            const localPositionStart = object.inverseGlobalMatrix.transformPoint(worldPositionStart);
            const worldPositionEnd = camera.inverseMatrix.transformPoint(pointerEnd);
            const localPositionEnd = object.inverseGlobalMatrix.transformPoint(worldPositionEnd);
            const delta = localPositionStart.clone().sub(localPositionEnd).multiply(object.scale);
            return delta;
        }
        const resizerContainer = new Object2D();
        resizerContainer.draggable = false;
        resizerContainer.focusable = false;
        resizerContainer.pointerEvents = false;
        resizerContainer.layer = object.layer + 1;
        scene.add(resizerContainer);
        let topLeft, topRight, bottomLeft, bottomRight;
        let topResizer, rightResizer, bottomResizer, leftResizer;
        let rotater;
        if (tools === Helpers.ALL || tools === Helpers.RESIZE) {
            function createResizer(color, x, y, type = 'box', addRotation) {
                const resizer = (type === 'box') ? new Box() : new Circle();
                if (type === 'circle') resizer.radius = radius;
                resizer.draggable = true;
                resizer.focusable = false;
                resizer.fillStyle.color = color;
                resizer.layer = object.layer + 1;
                resizer.cursor = function(camera) {
                    const cursorStyles = [
                        { angle:   0, cursor: 'ew-resize' },
                        { angle:  45, cursor: 'nwse-resize' },
                        { angle:  90, cursor: 'ns-resize' },
                        { angle: 135, cursor: 'nesw-resize' },
                        { angle: 180, cursor: 'ew-resize' },
                        { angle: 225, cursor: 'nwse-resize' },
                        { angle: 270, cursor: 'ns-resize' },
                        { angle: 315, cursor: 'nesw-resize' },
                        { angle: 360, cursor: 'ew-resize' },
                    ];
                    let localScale =  object.globalMatrix.getScale();
                    let localRotation = object.globalMatrix.getRotation();
                    if (localScale.x < 0 && localScale.y > 0 || localScale.x > 0 && localScale.y < 0) {
                        localRotation -= (addRotation * (Math.PI / 180));
                    } else {
                        localRotation += (addRotation * (Math.PI / 180));
                    }
                    const rotation = (localRotation + camera.rotation) * 180 / Math.PI;
                    const normalizedRotation = (rotation + 720) % 360;
                    let closestCursor = 'default';
                    let minAngleDiff = Infinity;
                    for (const { angle, cursor } of cursorStyles) {
                        const angleDiff = Math.abs(normalizedRotation - angle);
                        if (angleDiff < minAngleDiff) {
                            minAngleDiff = angleDiff;
                            closestCursor = cursor;
                        }
                    }
                    return closestCursor;
                };
                resizer.onPointerDrag = function(pointer, camera) {
                    Object2D.prototype.onPointerDrag.call(this, pointer, camera);
                    const delta = localDelta(pointer, camera);
                    if (x === 0) delta.x = 0;
                    if (y === 0) delta.y = 0;
                    delta.multiplyScalar(0.5);
                    const size = object.boundingBox.getSize();
                    const scaleX = (x === 0) ? 0 : 2 / size.x;
                    const scaleY = (y === 0) ? 0 : 2 / size.y;
                    const scale = new Vector2(scaleX, scaleY);
                    const rotationMatrix = new Matrix2().rotate(object.rotation);
                    const rotatedDelta = rotationMatrix.transformPoint(delta);
                    object.position.add(rotatedDelta);
                    object.scale.sub(delta.multiply(x, y).multiply(scale));
                    object.matrixNeedsUpdate = true;
                };
                resizerContainer.add(resizer);
                return resizer;
            }
            bottomRight = createResizer('#0000ff', -1, -1, 'circle', 45);
            bottomLeft = createResizer('#ffff00', 1, -1, 'circle', 135);
            topLeft = createResizer('#ff0000', 1, 1, 'circle', 225);
            topRight = createResizer('#00ff00', -1, 1, 'circle', 315);
            rightResizer = createResizer('#0000ff', -1, 0, 'box', 0);
            bottomResizer = createResizer('#ffff00', 0, -1, 'box', 90);
            leftResizer = createResizer('#ff0000', 1, 0, 'box', 180);
            topResizer = createResizer('#00ff00', 0, 1, 'box', 270);
        }
        if (tools === Helpers.ALL || tools === Helpers.ROTATE) {
            rotater = new Circle();
            rotater.draggable = true;
            rotater.focusable = false;
            rotater.radius = radius;
            rotater.layer = object.layer + 1;
            rotater.cursor = `url('${CURSOR_ROTATE}') 16 16, auto`;
            rotater.onPointerDrag = function(pointer, camera) {
                const objectCenter = object.boundingBox.getCenter();
                const pointerStart = pointer.position.clone();
                const pointerEnd = pointer.position.clone().sub(pointer.delta);
                const worldPositionStart = camera.inverseMatrix.transformPoint(pointerStart);
                const localPositionStart = object.inverseGlobalMatrix.transformPoint(worldPositionStart);
                const worldPositionEnd = camera.inverseMatrix.transformPoint(pointerEnd);
                const localPositionEnd = object.inverseGlobalMatrix.transformPoint(worldPositionEnd);
                localPositionStart.sub(objectCenter).multiply(object.scale);
                localPositionEnd.sub(objectCenter).multiply(object.scale);
                const angle = localPositionEnd.angleBetween(localPositionStart);
                const cross = localPositionEnd.cross(localPositionStart);
                const sign = Math.sign(cross);
                object.rotation += (angle * sign);
                object.updateMatrix(true);
            };
            resizerContainer.add(rotater);
        }
        resizerContainer.onUpdate = function(camera) {
            const box = object.boundingBox;
            const center = box.getCenter();
            const handleOffset = ((radius * 4) / Math.abs(object.scale.y)) / camera.scale;
            const centerWorld = object.globalMatrix.transformPoint(center);
            const topCenterWorld = object.globalMatrix.transformPoint(center.x, box.min.y - handleOffset);
            if (rotater) {
                rotater.position.copy(topCenterWorld);
                rotater.scale.set(1 / camera.scale, 1 / camera.scale);
                rotater.updateMatrix();
            }
            const topLeftWorld = object.globalMatrix.transformPoint(box.min);
            const topRightWorld = object.globalMatrix.transformPoint(new Vector2(box.max.x, box.min.y));
            const bottomLeftWorld = object.globalMatrix.transformPoint(new Vector2(box.min.x, box.max.y));
            const bottomRightWorld = object.globalMatrix.transformPoint(box.max);
            if (topLeft) {
                topLeft.position.copy(topLeftWorld);
                topLeft.scale.set(1 / camera.scale, 1 / camera.scale);
                topLeft.rotation = object.rotation;
                topLeft.updateMatrix();
            }
            if (topRight) {
                topRight.position.copy(topRightWorld);
                topRight.scale.set(1 / camera.scale, 1 / camera.scale);
                topRight.rotation = object.rotation;
                topRight.updateMatrix();
            }
            if (bottomLeft) {
                bottomLeft.position.copy(bottomLeftWorld);
                bottomLeft.scale.set(1 / camera.scale, 1 / camera.scale);
                bottomLeft.rotation = object.rotation;
                bottomLeft.updateMatrix();
            }
            if (bottomRight) {
                bottomRight.position.copy(bottomRightWorld);
                bottomRight.scale.set(1 / camera.scale, 1 / camera.scale);
                bottomRight.rotation = object.rotation;
                bottomRight.updateMatrix();
            }
            const leftMiddleWorld = object.globalMatrix.transformPoint(new Vector2(box.min.x, center.y));
            const rightMiddleWorld = object.globalMatrix.transformPoint(new Vector2(box.max.x, center.y));
            const topMiddleWorld = object.globalMatrix.transformPoint(new Vector2(center.x, box.min.y));
            const bottomMiddleWorld = object.globalMatrix.transformPoint(new Vector2(center.x, box.max.y));
            const halfWidth = object.boundingBox.getSize().x / 2 * Math.abs(object.scale.x);
            const halfHeight = object.boundingBox.getSize().y / 2 * Math.abs(object.scale.y);
            if (leftResizer) {
                leftResizer.position.copy(leftMiddleWorld);
                leftResizer.scale.set(1 / camera.scale, 1);
                leftResizer.rotation = object.rotation;
                leftResizer.box.set(new Vector2(-radius, -halfHeight), new Vector2(radius, halfHeight));
                leftResizer.updateMatrix();
            }
            if (rightResizer) {
                rightResizer.position.copy(rightMiddleWorld);
                rightResizer.scale.set(1 / camera.scale, 1);
                rightResizer.rotation = object.rotation;
                rightResizer.box.set(new Vector2(-radius, -halfHeight), new Vector2(radius, halfHeight));
                rightResizer.updateMatrix();
            }
            if (topResizer) {
                topResizer.position.copy(topMiddleWorld);
                topResizer.scale.set(1, 1 / camera.scale);
                topResizer.rotation = object.rotation;
                topResizer.box.set(new Vector2(-halfWidth, -radius), new Vector2(halfWidth, radius));
                topResizer.updateMatrix();
            }
            if (bottomResizer) {
                bottomResizer.position.copy(bottomMiddleWorld);
                bottomResizer.scale.set(1, 1 / camera.scale);
                bottomResizer.rotation = object.rotation;
                bottomResizer.box.set(new Vector2(-halfWidth, -radius), new Vector2(halfWidth, radius));
                bottomResizer.updateMatrix();
            }
        };
    }
}

class Renderer extends Element {
    constructor(options = {}) {
        if (options === undefined) options = {};
        function defaultOption(key, value) {
            if (!(key in options)) options[key] = value;
        }
        defaultOption('alpha', true);
        defaultOption('disableContextMenu', true);
        defaultOption('imageSmoothingEnabled', true);
        defaultOption('imageSmoothingQuality', 'low');
        defaultOption('globalCompositeOperation', 'source-over');
        defaultOption('width', 1000);
        defaultOption('height', 1000);
        const canvas = document.createElementNS('http://www.w3.org/1999/xhtml', 'canvas');
        canvas.width = options.width;
        canvas.height = options.height;
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        super(canvas);
        this.ctx = this.dom.getContext('2d', { alpha: options.alpha });
        this.ctx.imageSmoothingEnabled = options.imageSmoothingEnabled;
        this.ctx.imageSmoothingQuality = options.imageSmoothingQuality;
        this.ctx.globalCompositeOperation = options.globalCompositeOperation;
        this.pointer = new Pointer(this);
        this.autoClear = true;
        this.running = false;
        this.frame = -1;
        this.scene = null;
        this.camera = null;
        const self = this;
        const resizeObserver = new ResizeObserver(entries => {
            for (const entry of entries) {
                canvas.width = entry.contentRect.width;
                canvas.height = entry.contentRect.height;
                if (self.running && self.scene && self.camera) {
                    self.update(self.scene, self.camera);
                }
            }
        });
        resizeObserver.observe(canvas);
        this.on('destroy', () => {
            resizeObserver.unobserve(canvas);
        });
        this.on('dblclick', (event) => {
            if (!self.scene || !self.camera) return;
            const point = new Vector2(event.clientX, event.clientY);
            const worldPoint = self.camera.inverseMatrix.transformPoint(point);
            const objects = self.scene.getWorldPointIntersections(worldPoint);
            for (const object of objects) if (object.focusable) return self.focusCamera(object);
            return self.focusCamera(null);
        });
        this.beingDragged = null;
    }
    get width() { return this.dom.width; }
    set width(x) { this.dom.width = x; }
    get height() { return this.dom.height; }
    set height(y) { this.dom.height = y; }
    ratio() {
        const rect = this.dom.getBoundingClientRect();
        return ((this.width / this.height) / (rect.width / rect.height));
    }
    start(scene, camera, onUpdate) {
        if (this.running) return;
        this.running = true;
        this.scene = scene;
        this.camera = camera;
        const self = this;
        function loop() {
            if (typeof onUpdate === 'function') onUpdate();
            self.update(scene, camera);
            if (self.running) self.frame = requestAnimationFrame(loop);
        }
        loop();
    }
    stop() {
        this.running = false;
        cancelAnimationFrame(this.frame);
    }
    update(object, camera) {
        this.pointer.update();
        camera.update(this.pointer);
        camera.updateMatrix(this.width / 2.0, this.height / 2.0);
        const pointer = this.pointer;
        const point = pointer.position.clone();
        const cameraPoint = camera.inverseMatrix.transformPoint(point);
        const objects = [];
        object.traverse(function(child) { if (child.visible) objects.push(child); });
        objects.sort(function(a, b) {
            if (b.layer === a.layer) return b.level - a.level;
            return b.layer - a.layer;
        });
        let currentCursor = null;
        for (const child of objects) {
            if (child.pointerEvents) {
                const localPoint = child.inverseGlobalMatrix.transformPoint(child.ignoreCamera ? point : cameraPoint);
                const isInside = child.isInside(localPoint);
                if (!currentCursor && isInside || this.beingDragged === child && child.cursor) {
                    if (typeof child.cursor === 'function') currentCursor = child.cursor(camera);
                    else currentCursor = child.cursor;
                }
                if (isInside) {
                    if (!this.beingDragged) {
                        if (!child.pointerInside && typeof child.onPointerEnter === 'function') child.onPointerEnter(pointer, camera);
                        if (typeof child.onPointerOver === 'function') child.onPointerOver(pointer, camera);
                        if (pointer.buttonDoubleClicked(Pointer.LEFT) && typeof child.onDoubleClick === 'function') child.onDoubleClick(pointer, camera);
                        if (pointer.buttonPressed(Pointer.LEFT) && typeof child.onButtonPressed === 'function') child.onButtonPressed(pointer, camera);
                        if (pointer.buttonJustReleased(Pointer.LEFT) && typeof child.onButtonUp === 'function') child.onButtonUp(pointer, camera);
                        if (pointer.buttonJustPressed(Pointer.LEFT)) {
                            if (typeof child.onButtonDown === 'function') child.onButtonDown(pointer, camera);
                            if (child.draggable) {
                                this.beingDragged = child;
                                if (typeof child.onPointerDragStart === 'function') child.onPointerDragStart(pointer, camera);
                            }
                        }
                    }
                    child.pointerInside = true;
                } else if (this.beingDragged !== child && child.pointerInside) {
                    if (typeof child.onPointerLeave === 'function') child.onPointerLeave(pointer, camera);
                    child.pointerInside = false;
                }
            }
            if (pointer.buttonJustReleased(Pointer.LEFT)) {
                if (this.beingDragged === child && child.pointerEvents && typeof child.onPointerDragEnd === 'function') {
                    child.onPointerDragEnd(pointer, camera);
                }
                this.beingDragged = null;
            } else if (this.beingDragged === child && child.pointerEvents && typeof child.onPointerDrag === 'function') {
                child.onPointerDrag(pointer, camera);
            }
        }
        document.body.style.cursor = currentCursor ?? 'default';
        object.traverse(function(child) {
            child.updateMatrix();
        });
        object.traverse(function(child) {
            if (typeof child.onUpdate === 'function') child.onUpdate(camera);
        });
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        if (this.autoClear) this.ctx.clearRect(0, 0, this.width, this.height);
        for (let i = objects.length - 1; i >= 0; i--) {
            const object = objects[i];
            if (object.isMask) continue;
            if (object.saveContextState) this.ctx.save();
            for (const mask of object.masks) {
                if (!mask.ignoreCamera) camera.matrix.setContextTransform(this.ctx);
                mask.transform(this.ctx, camera, this.dom, this);
                mask.clip(this.ctx, camera, this.dom);
            }
            if (!object.ignoreCamera) {
                camera.matrix.setContextTransform(this.ctx);
            } else if (object.masks.length > 0) {
                this.ctx.setTransform(1, 0, 0, 1, 0, 0);
            }
            object.transform(this.ctx, camera, this.dom, this);
            if (typeof object.style === 'function') object.style(this.ctx, camera, this.dom, this);
            if (typeof object.draw === 'function') object.draw(this.ctx, camera, this.dom, this);
            if (object.restoreContextState) this.ctx.restore();
        }
    };
    focusCamera(object, animationDuration = 200 ) {
        let targetScale, targetPosition;
        if (object) {
            const worldSize = object.getWorldBoundingBox().getSize();
            targetScale = 0.1 * Math.min(this.width / worldSize.x, this.height / worldSize.y);
            targetPosition = object.globalMatrix.getPosition();
            targetPosition.multiplyScalar(-targetScale);
            targetPosition.add(new Vector2(this.width / 2.0, this.height / 2.0));
        } else if (this.scene) {
            const sceneBounds = new Box2();
            this.scene.traverse((child) => { sceneBounds.union(child.getWorldBoundingBox()); });
            targetScale = 0.5 * Math.min(this.width / sceneBounds.getSize().x, this.height / sceneBounds.getSize().y);
            targetPosition = sceneBounds.getCenter();
            targetPosition.multiplyScalar(-targetScale);
            targetPosition.add(new Vector2(this.width / 2.0, this.height / 2.0));
        } else {
            return;
        }
        targetScale = Math.abs(targetScale);
        const startTime = performance.now();
        const startPosition = this.camera.position.clone();
        const startScale = this.camera.scale;
        const animate = () => {
            const elapsedTime = performance.now() - startTime;
            const t = Math.min(elapsedTime / animationDuration, 1);
            this.camera.lerpPosition(startPosition, targetPosition, t);
            this.camera.scale = startScale + (targetScale - startScale) * t;
            if (t < 1) requestAnimationFrame(animate);
        };
        animate();
    }
}

class Text extends Object2D {
    constructor(text = '', font = '16px Arial') {
        super();
        this.type = 'Text';
        this.text = text;
        this.font = font;
        this.context = null;
        this.strokeStyle = null;
        this.lineWidth = 1;
        this.fillStyle = new ColorStyle('#000000');
        this.textAlign = 'center';
        this.textBaseline = 'middle';
    }
    computeBoundingBox() {
        if (!this.context) return false;
        const context = this.context;
        context.font = this.font;
        context.textAlign = this.textAlign;
        context.textBaseline = this.textBaseline;
        const textMetrics = context.measureText(this.text);
        const textWidth = textMetrics.width;
        const textHeight = Math.max(textMetrics.actualBoundingBoxAscent, textMetrics.actualBoundingBoxDescent) * 2.0;
        this.boundingBox.set(new Vector2(textWidth / -2, textHeight / -2), new Vector2(textWidth / 2, textHeight / 2));
    }
    isInside(point) {
        return this.boundingBox.containsPoint(point);
    }
    draw(context, camera, canvas) {
        if (this.context !== context) {
            this.context = context;
            this.computeBoundingBox();
        }
        context.font = this.font;
        context.textAlign = this.textAlign;
        context.textBaseline = this.textBaseline;
        if (this.fillStyle) {
            context.fillStyle = this.fillStyle.get(context);
            context.fillText(this.text, 0, 0);
        }
        if (this.strokeStyle) {
            context.strokeStyle = this.strokeStyle.get(context);
            context.strokeText(this.text, 0, 0);
        }
    }
}

class Mask extends Object2D {
    constructor() {
        super();
        this.isMask = true;
        this.type = 'Mask';
    }
    clip(context, camera, canvas) {
    }
}

class BoxMask extends Mask {
    constructor() {
        super();
        this.type = 'BoxMask';
        this.box = new Box2(new Vector2(-50, -35), new Vector2(50, 35));
        this.invert = false;
    }
    isInside(point) {
        return this.box.containsPoint(point);
    }
    clip(context, camera, canvas) {
        context.beginPath();
        const width = this.box.max.x - this.box.min.x;
        if (this.invert) {
            context.rect(this.box.min.x - 1e4, -5e3, 1e4, 1e4);
            context.rect(this.box.max.x, -5e3, 1e4, 1e4);
            context.rect(this.box.min.x, this.box.min.y - 1e4, width, 1e4);
            context.rect(this.box.min.x, this.box.max.y, width, 1e4);
        } else {
            const height = this.box.max.y - this.box.min.y;
            context.fillRect(this.box.min.x, this.box.min.y, width, height);
        }
        context.clip();
    }
}

class GradientColorStop {
    constructor(offset, color) {
        this.offset = offset;
        this.color = color;
    }
}

class GradientStyle extends Style {
    constructor() {
        super();
        this.colors = [];
    }
    addColorStop(offset, color) {
        this.colors.push(new GradientColorStop(offset, color));
    }
}

class LinearGradientStyle extends GradientStyle {
    constructor() {
        super();
        this.start = new Vector2(-100, 0);
        this.end = new Vector2(100, 0);
    }
    get(context) {
        let style = context.createLinearGradient(this.start.x, this.start.y, this.end.x, this.end.y);
        for (let i = 0; i < this.colors.length; i++) {
            style.addColorStop(this.colors[i].offset, this.colors[i].color);
        }
        return style;
    }
}

class RadialGradientStyle extends GradientStyle {
    constructor() {
        super();
        this.start = new Vector2(0, 0);
        this.startRadius = 10;
        this.end = new Vector2(0, 0);
        this.endRadius = 50;
    }
    get(context) {
        let style = context.createRadialGradient(this.start.x, this.start.y, this.startRadius, this.end.x, this.end.y, this.endRadius);
        for (let i = 0; i < this.colors.length; i++) {
            style.addColorStop(this.colors[i].offset, this.colors[i].color);
        }
        return style;
    };
}

var Scene$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  Camera2D: Camera2D,
  Helpers: Helpers,
  Object2D: Object2D,
  Renderer: Renderer,
  Box2: Box2,
  Matrix2: Matrix2,
  UUID: UUID,
  Vector2: Vector2,
  Box: Box,
  Circle: Circle,
  Text: Text,
  Mask: Mask,
  BoxMask: BoxMask,
  Style: Style,
  ColorStyle: ColorStyle,
  GradientStyle: GradientStyle,
  GradientColorStop: GradientColorStop,
  LinearGradientStyle: LinearGradientStyle,
  RadialGradientStyle: RadialGradientStyle
});

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;
  if (!css || typeof document === 'undefined') { return; }
  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';
  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$d = "/**\n * Units\n *  px      Pixels\n *  %       Percentage relative to the parent element\n *  em      Relative to the font-size of the element (2em means 2 times the size of the current font)\n *  rem     Relative to the font-size of the root element\n *  ch      Relative to the width of the character '0' of the current font\n *  ex      Relative to the height of a lowercase letter ('x') of the current font\n *  cap     Relative to the height of a capital letter of the current font\n *  vw      Relative to 1% of the width of the viewport (browser window)\n *  vh      Relative to 1% of the width of the viewport (browser window)\n *  vmin    Relative to 1% of viewport's (browser window's) smaller dimension\n *  vmax    Relative to 1% of viewport's (browser window's) larger dimension\n */\n\n:root {\n    color-scheme: light dark;\n\n    /* Scheme Colors */\n    --shadow:                 0,   0,   0;      /* black for dark theme, white for light theme */\n    --darkness:               0,   0,   0;      /* lightens as theme lightens */\n\n    --background-dark:       24,  24,  24;\n    --background-light:      32,  32,  32;\n    --button-dark:           40,  40,  40;\n    --button-light:          60,  60,  60;\n\n    --text-dark:            100, 100, 100;\n    --text:                 190, 190, 190;\n    --text-light:           225, 225, 225;\n\n    --blacklight:             0,   0,   0;\n    --darklight:              8,   8,   8;\n    --midlight:              85,  85,  85;\n    --highlight:            255, 255, 255;\n\n    --icon-dark:              0,  85, 102;      /* icon darkened            dark classic aqua   #005566 */\n    --icon:                   0, 170, 204;      /* icon color               classic aqua        #00aacc */\n    --icon-light:           101, 229, 255;      /* icon brightened          light clasic aqua   #65e5ff */\n\n    --complement:           255, 132,  10;      /* icon shifted 180°        orange              #ff840a */\n    --triadic1:             255,  10,  67;      /* icon shifted 120°        red                 #ff0a43 */\n    --triadic2:             157, 255,  59;      /* complement shifted 120°  lime green          #9dff3b */\n    --triadic3:             255,  10, 238;      /* icon shifted 90°         pink                #ff0aee */\n    --triadic4:             232, 255,  59;      /* complement shifted 90°   pale yellow         #e8ff3b */\n    --triadic5:             116,  10, 255;      /* icon shifted 60°         purple              #740aff */\n    --triadic6:             255, 228,  59;      /* complement shifted 60°   yellow              #ffe43b */\n\n    /* Theme Multiplier */\n    --bright:               1;                  /* 1: Mid/Dark, 0: Light */\n\n    /* Basic Colors */\n    --white:                255, 255, 255;\n    --gray:                 128, 128, 128;\n    --black:                  0,   0,   0;\n\n    /* Input Colors */\n    --valid:                131, 242,  13;      /* green */\n    --invalid:              242,  51,  13;      /* red */\n    --warning:              242, 204,  13;      /* yellow */\n    --info:                  13,  51, 242;      /* blue */\n\n    /* Hue Rotation for Icon Color */\n    --rotate-hue:           0deg;               /* Programatically changes to degree offset icon color is from Aqua */\n\n    /* Transparency */\n    --panel-transparency:   0.85;\n\n    /* Font */\n    font-size:              10px;               /* 10px or 62.5% (62% of 16px (browser root default) === 10px) */\n    --base-size:            10px;               /* Gui designed to scale from this original font size */\n    --font-size:            14px;               /* Current font size, NOTE: 1em = 14px (i.e. 10px * 1.4)  */\n    --font-family:          'Roboto', Helvetica, Arial, sans-serif;\n\n    /* Sizes */\n    --pixel:                0.07143em;          /*  1px @ font size 1.4em (14px) */\n    --minus:               -0.07143em;          /*  1px @ font size 1.4em (14px) */\n\n    --border-micro:         0.07143em;          /*  1px @ font size 1.4em (14px) */\n    --border-small:         0.14286em;          /*  2px @ font size 1.4em (14px) */\n\n    --radius-small:         0.28571em;          /*  4px @ font size 1.4em (14px) */\n    --radius-large:         0.42857em;          /*  6px @ font size 1.4em (14px) */\n\n    --pad-micro:            0.07143em;          /*  1px @ font size 1.4em (14px), i.e. 1px = 1 / 14 */\n    --pad-x-small:          0.14286em;          /*  2px; */\n    --pad-small:            0.21429em;          /*  3px; */\n    --pad-smallish:         0.28571em;          /*  4px; */\n    --pad-medium:           0.35714em;          /*  5px; */\n    --pad-large:            0.71429em;          /* 10px; */\n\n    --arrow-size:           0.4em;              /* Dropdown arrow */\n    --asset-size:           3.45em;             /* AssetBox size */\n    --button-size:          2.65em;             /* Toolbar button size */\n    --scroll-size:          0.57143em;          /* 8px, scrollbar thickness */\n    --resize-size:          1.0em;              /* 14px, panel resizer thickness */\n    --row-height:           1.7em;              /* min row height (Asset Box, Property List, Tree List, etc.) */\n    --tab-size:             2.25em;             /* Tab button diameter */\n    --tab-timing:           200ms;              /* Tab animation time */\n\n    /* Timing */\n    --menu-timing:          0.2s;               /* Various gui related time delays (in seconds) */\n    --tooltip-delay:        500ms;              /* Time that passes before tooltips are shown */\n\n    /* Box Shadows:         'inner-glow', 'pop-out-shadow', 'sunk-in-shadow' */\n\n    /* Filters */\n    --drop-shadow:          drop-shadow(0 0 var(--pad-x-small) black);\n    --tint-icon:            none;\n    --tint-complement:      none;\n    --tint-triadic1:        none;\n    --tint-triadic2:        none;\n    --tint-triadic3:        none;\n    --tint-triadic4:        none;\n    --tint-triadic5:        none;\n    --tint-triadic6:        none;\n    --tint-text:            none;\n\n}\n";
var stylesheet$d="/**\n * Units\n *  px      Pixels\n *  %       Percentage relative to the parent element\n *  em      Relative to the font-size of the element (2em means 2 times the size of the current font)\n *  rem     Relative to the font-size of the root element\n *  ch      Relative to the width of the character '0' of the current font\n *  ex      Relative to the height of a lowercase letter ('x') of the current font\n *  cap     Relative to the height of a capital letter of the current font\n *  vw      Relative to 1% of the width of the viewport (browser window)\n *  vh      Relative to 1% of the width of the viewport (browser window)\n *  vmin    Relative to 1% of viewport's (browser window's) smaller dimension\n *  vmax    Relative to 1% of viewport's (browser window's) larger dimension\n */\n\n:root {\n    color-scheme: light dark;\n\n    /* Scheme Colors */\n    --shadow:                 0,   0,   0;      /* black for dark theme, white for light theme */\n    --darkness:               0,   0,   0;      /* lightens as theme lightens */\n\n    --background-dark:       24,  24,  24;\n    --background-light:      32,  32,  32;\n    --button-dark:           40,  40,  40;\n    --button-light:          60,  60,  60;\n\n    --text-dark:            100, 100, 100;\n    --text:                 190, 190, 190;\n    --text-light:           225, 225, 225;\n\n    --blacklight:             0,   0,   0;\n    --darklight:              8,   8,   8;\n    --midlight:              85,  85,  85;\n    --highlight:            255, 255, 255;\n\n    --icon-dark:              0,  85, 102;      /* icon darkened            dark classic aqua   #005566 */\n    --icon:                   0, 170, 204;      /* icon color               classic aqua        #00aacc */\n    --icon-light:           101, 229, 255;      /* icon brightened          light clasic aqua   #65e5ff */\n\n    --complement:           255, 132,  10;      /* icon shifted 180°        orange              #ff840a */\n    --triadic1:             255,  10,  67;      /* icon shifted 120°        red                 #ff0a43 */\n    --triadic2:             157, 255,  59;      /* complement shifted 120°  lime green          #9dff3b */\n    --triadic3:             255,  10, 238;      /* icon shifted 90°         pink                #ff0aee */\n    --triadic4:             232, 255,  59;      /* complement shifted 90°   pale yellow         #e8ff3b */\n    --triadic5:             116,  10, 255;      /* icon shifted 60°         purple              #740aff */\n    --triadic6:             255, 228,  59;      /* complement shifted 60°   yellow              #ffe43b */\n\n    /* Theme Multiplier */\n    --bright:               1;                  /* 1: Mid/Dark, 0: Light */\n\n    /* Basic Colors */\n    --white:                255, 255, 255;\n    --gray:                 128, 128, 128;\n    --black:                  0,   0,   0;\n\n    /* Input Colors */\n    --valid:                131, 242,  13;      /* green */\n    --invalid:              242,  51,  13;      /* red */\n    --warning:              242, 204,  13;      /* yellow */\n    --info:                  13,  51, 242;      /* blue */\n\n    /* Hue Rotation for Icon Color */\n    --rotate-hue:           0deg;               /* Programatically changes to degree offset icon color is from Aqua */\n\n    /* Transparency */\n    --panel-transparency:   0.85;\n\n    /* Font */\n    font-size:              10px;               /* 10px or 62.5% (62% of 16px (browser root default) === 10px) */\n    --base-size:            10px;               /* Gui designed to scale from this original font size */\n    --font-size:            14px;               /* Current font size, NOTE: 1em = 14px (i.e. 10px * 1.4)  */\n    --font-family:          'Roboto', Helvetica, Arial, sans-serif;\n\n    /* Sizes */\n    --pixel:                0.07143em;          /*  1px @ font size 1.4em (14px) */\n    --minus:               -0.07143em;          /*  1px @ font size 1.4em (14px) */\n\n    --border-micro:         0.07143em;          /*  1px @ font size 1.4em (14px) */\n    --border-small:         0.14286em;          /*  2px @ font size 1.4em (14px) */\n\n    --radius-small:         0.28571em;          /*  4px @ font size 1.4em (14px) */\n    --radius-large:         0.42857em;          /*  6px @ font size 1.4em (14px) */\n\n    --pad-micro:            0.07143em;          /*  1px @ font size 1.4em (14px), i.e. 1px = 1 / 14 */\n    --pad-x-small:          0.14286em;          /*  2px; */\n    --pad-small:            0.21429em;          /*  3px; */\n    --pad-smallish:         0.28571em;          /*  4px; */\n    --pad-medium:           0.35714em;          /*  5px; */\n    --pad-large:            0.71429em;          /* 10px; */\n\n    --arrow-size:           0.4em;              /* Dropdown arrow */\n    --asset-size:           3.45em;             /* AssetBox size */\n    --button-size:          2.65em;             /* Toolbar button size */\n    --scroll-size:          0.57143em;          /* 8px, scrollbar thickness */\n    --resize-size:          1.0em;              /* 14px, panel resizer thickness */\n    --row-height:           1.7em;              /* min row height (Asset Box, Property List, Tree List, etc.) */\n    --tab-size:             2.25em;             /* Tab button diameter */\n    --tab-timing:           200ms;              /* Tab animation time */\n\n    /* Timing */\n    --menu-timing:          0.2s;               /* Various gui related time delays (in seconds) */\n    --tooltip-delay:        500ms;              /* Time that passes before tooltips are shown */\n\n    /* Box Shadows:         'inner-glow', 'pop-out-shadow', 'sunk-in-shadow' */\n\n    /* Filters */\n    --drop-shadow:          drop-shadow(0 0 var(--pad-x-small) black);\n    --tint-icon:            none;\n    --tint-complement:      none;\n    --tint-triadic1:        none;\n    --tint-triadic2:        none;\n    --tint-triadic3:        none;\n    --tint-triadic4:        none;\n    --tint-triadic5:        none;\n    --tint-triadic6:        none;\n    --tint-text:            none;\n\n}\n";
styleInject(css_248z$d);

var css_248z$c = "/********** Base Styling **********/\n\n*:not(.suey-custom-font *) {\n    font-family: var(--font-family);\n    font-size: var(--font-size);\n}\n\nhtml {\n    box-sizing: border-box;\n}\n\nhtml *, html *::before, html *::after {\n    box-sizing: inherit;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n\n    /* Color main text and background */\n    color: rgba(var(--text-light), 0.75);\n    background-color: rgb(var(--background-dark));\n}\n\nimage {\n    image-rendering: smooth;\n}\n\n.suey-text {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: var(--pad-micro);\n}\n\n/********** Scrollbars **********/\n\ndiv::-webkit-scrollbar {\n    height: var(--scroll-size);\n    width: var(--scroll-size);\n    background: rgba(var(--shadow), 0.35);\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n\ndiv::-webkit-scrollbar-thumb:horizontal {\n    background: linear-gradient(to left, rgba(var(--icon), 1), rgba(var(--icon-dark), 1));\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n\ndiv::-webkit-scrollbar-thumb:vertical {\n    background: linear-gradient(to bottom, rgba(var(--icon), 1), rgba(var(--icon-dark), 1));\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n\ndiv::-webkit-scrollbar-corner {\n    background: rgba(var(--background-dark), 1);\n}\n\n/********** SVG **********/\n\n@media all {\n    svg {\n        shape-rendering: auto;\n    }\n}\n";
var stylesheet$c="/********** Base Styling **********/\n\n*:not(.suey-custom-font *) {\n    font-family: var(--font-family);\n    font-size: var(--font-size);\n}\n\nhtml {\n    box-sizing: border-box;\n}\n\nhtml *, html *::before, html *::after {\n    box-sizing: inherit;\n}\n\nbody {\n    margin: 0;\n    padding: 0;\n\n    /* Color main text and background */\n    color: rgba(var(--text-light), 0.75);\n    background-color: rgb(var(--background-dark));\n}\n\nimage {\n    image-rendering: smooth;\n}\n\n.suey-text {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: var(--pad-micro);\n}\n\n/********** Scrollbars **********/\n\ndiv::-webkit-scrollbar {\n    height: var(--scroll-size);\n    width: var(--scroll-size);\n    background: rgba(var(--shadow), 0.35);\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n\ndiv::-webkit-scrollbar-thumb:horizontal {\n    background: linear-gradient(to left, rgba(var(--icon), 1), rgba(var(--icon-dark), 1));\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n\ndiv::-webkit-scrollbar-thumb:vertical {\n    background: linear-gradient(to bottom, rgba(var(--icon), 1), rgba(var(--icon-dark), 1));\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n\ndiv::-webkit-scrollbar-corner {\n    background: rgba(var(--background-dark), 1);\n}\n\n/********** SVG **********/\n\n@media all {\n    svg {\n        shape-rendering: auto;\n    }\n}\n";
styleInject(css_248z$c);

var css_248z$b = "/********** ELEMENT: <input> (number, text, etc) **********/\n\n.suey-input {\n    color: rgba(var(--text), 1);\n    background-color: rgba(var(--background-dark), 0.35);\n    box-shadow: inset 0 0.075em 0.15em 0 rgba(var(--shadow), 0.35);\n\n    border: var(--border-micro) solid rgba(var(--shadow), 0.5);\n    border-radius: var(--radius-small);\n    outline: var(--border-micro) solid rgba(var(--shadow), 0.0);\n    padding: var(--pad-x-small) var(--pad-smallish);\n    vertical-align: middle;\n    min-width: 1em;\n    text-align: left;\n}\n\n.suey-input:hover {\n    color: rgba(var(--highlight), 1);\n    background-color: rgba(var(--button-dark), 0.5);\n}\n\n.suey-input:focus {\n    color: rgba(var(--highlight), 1);\n    background: rgba(var(--darklight), 1);\n    border: var(--border-micro) solid rgb(var(--icon));\n    outline: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    border-radius: 0;\n}\n\n.suey-input.suey-valid-type {\n    color: rgba(var(--text), 1);\n    box-shadow:\n        inset 0 0 0 var(--pixel) rgba(var(--valid), 0.5),\n        inset 0 0.075em 0.5em 0 rgba(var(--shadow), 0.5);\n    padding-left: var(--pad-medium);\n    text-align: left !important;\n}\n\n.suey-input.suey-invalid-type {\n    color: rgba(var(--text), 0.35);\n    box-shadow:\n        inset 0 0 0 var(--pixel) rgba(var(--invalid), 0.5),\n        inset 0 0.075em 0.5em 0 rgba(var(--shadow), 0.5);\n    text-align: center !important;\n}\n\n.suey-input.suey-yes-drop {\n    color: rgba(var(--valid), 1);\n    background: rgba(var(--darklight), 1);\n    border-radius: 0;\n    border: var(--border-micro) solid rgb(var(--valid));\n    /* outline: var(--border-micro) solid rgb(var(--valid)); */\n    box-shadow: inset 0 0 0 var(--pixel) rgba(var(--valid), 0.5);\n    text-align: center !important;\n}\n\n.suey-input.suey-no-drop {\n    color: rgba(var(--invalid), 1.0);\n    background: rgba(var(--darklight), 1);\n    border-radius: 0;\n    border: var(--border-micro) solid rgb(var(--invalid));\n    /* outline: var(--border-micro) solid rgb(var(--invalid)); */\n    box-shadow: inset 0 0 0 var(--pixel) rgba(var(--invalid), 0.5);\n    text-align: center !important;\n}\n\n/** Hide Arrow Spinners - Chrome, Safari, Edge, Opera */\n.suey-input::-webkit-outer-spin-button,\n.suey-input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\n/********** ELEMENT: <button> Button **********/\n\n.suey-button {\n    /* display: flex; */\n    position: relative;\n\n    cursor: pointer;\n    pointer-events: all;\n\n    color: rgba(var(--text-light), 1);\n\n    border: var(--border-micro) solid rgba(var(--shadow), 0.75);\n    border-radius: var(--radius-small);\n    outline: var(--border-micro) solid rgba(var(--darklight), 0.0);\n\n    background-color: rgba(var(--button-dark), 0.75);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.5), rgba(var(--icon-dark), 0.5));\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n\n    font-size: var(--font-size);\n    margin: 0;\n    padding: var(--pad-x-small) var(--pad-medium);\n\n    overflow: hidden;\n    text-align: center;\n    text-overflow: ellipsis;\n    vertical-align: middle;\n    white-space: nowrap;\n}\n\n.suey-button:not(.suey-selected):enabled:hover {\n    filter: brightness(1.25);\n}\n\n.suey-button:not(.suey-selected):focus {\n    outline: var(--border-micro) solid rgba(var(--highlight), 0.5);\n}\n\n.suey-button:not(.suey-selected):enabled:active {\n    color: rgba(var(--text-dark), 1);\n    background-color: rgba(var(--background-dark), 0.5);\n    background-image: none;\n    box-shadow: inset 0 var(--pad-micro) var(--pad-x-small) 0 rgba(var(--shadow), 0.75); /* sunk-in-shadow */\n}\n\n.suey-button.suey-selected {\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom left, rgba(var(--icon-light), 0.20), rgba(var(--icon), 0.20));\n    box-shadow: inset 0 var(--pad-micro) var(--pad-x-small) 0 rgba(var(--shadow), 0.75); /* sunk-in-shadow */\n}\n\n.suey-button:disabled {\n    pointer-events: none;\n}\n\n.suey-button:disabled {\n    filter: contrast(75%) grayscale(100%) brightness(50%);\n}\n\n/* Little borderless buttons */\n.suey-borderless-button {\n    user-select: none;\n    border: none;\n    border-radius: var(--radius-large);\n    background: transparent;\n    box-shadow: none;\n    outline: none;\n\n    min-height: 1.5em;\n    min-width: 1.5em;\n}\n\n.suey-borderless-button:not(.suey-selected):enabled:hover {\n    background-image: linear-gradient(to bottom, rgba(var(--white), 0.1), rgba(var(--white), 0.2));\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) 0 rgba(var(--white), 0.25),\n        inset var(--pixel) var(--minus) var(--pixel) 0 rgba(var(--black), 0.25);\n}\n\n.suey-borderless-button:not(.suey-selected):enabled:active {\n    background-image: linear-gradient(to bottom, rgba(var(--black), 0.2), rgba(var(--black), 0.1));\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) 0 rgba(var(--black), 0.5),\n        inset var(--pixel) var(--minus) var(--pixel) 0 rgba(var(--black), 0.5);\n}\n\n/********** ELEMENT: <input> Checkbox **********/\n\n/* Container */\n.suey-checkbox {\n    background: transparent;\n    display: inline-block;\n    position: relative;\n    justify-content: left;\n    cursor: pointer;\n    margin-left: 0.1em;\n}\n\n/* Native Element (holds checkbox value) */\n.suey-checkbox-input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n/* Visible Background: Unchecked */\n.suey-checkbox-button {\n    flex-grow: 0;\n    flex-shrink: 0;\n    position: absolute;\n    color: rgba(var(--text), 1);\n    background-image: none;\n    background-color: rgba(var(--background-dark), 0.5);\n    box-shadow: inset 0 var(--pad-micro) var(--pad-x-small) 0 rgba(var(--shadow), 0.35); /* sunk-in-shadow */\n    left: 0;\n    top: 50%;\n    width: 2.0em;\n    height: 1.20em;\n    border-radius: 1.0em;\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    transform: translateY(-50%);\n    transition: transform var(--menu-timing);\n}\n\n/* Visible Background: Checked */\n.suey-checkbox-input:checked + .suey-checkbox-button {\n    --bg-color-light: var(--icon-light);\n    --bg-color-dark: var(--icon-dark);\n    background-color: rgba(var(--highlight), 0.2);\n    background-image: linear-gradient(to bottom, rgba(var(--bg-color-light), 0.7), rgba(var(--bg-color-dark), 0.7));\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n}\n\n/* Visible Background: Checked & Hover */\n.suey-checkbox-input:checked:hover + .suey-checkbox-button {\n    background-color: rgba(var(--highlight), 0.5);\n}\n\n/* Button: Unchecked */\n.suey-checkbox-button:before {\n    content: '';\n    flex-grow: 0;\n    flex-shrink: 0;\n    position: absolute;\n    left: 0.2em;\n    top: 50%;\n    width: 0.65em;\n    height: 0.65em;\n    background-color: rgba(var(--text-light), 0.8);\n    border-radius: 1em;\n    transform: translate(0, -50%);\n    transition: transform var(--menu-timing);\n}\n\n/* Button: Checked */\n.suey-checkbox-input:checked + .suey-checkbox-button:before {\n    /* background-color: rgba(var(--highlight), 0.7); */\n    box-shadow: 0px 0px 3px 2px rgba(var(--shadow), 0.5); /* drop shadow */\n    transform: translate(0.75em, -50%);\n    transition: transform var(--menu-timing);\n}\n\n/* Button: Hover, Unchecked */\n.suey-checkbox-input:hover + .suey-checkbox-button:before {\n    background-color: rgba(var(--highlight), 0.9);\n}\n\n/********** CLASS: Drop down buttons and menus **********/\n\n/** Buttons that drop down a 'select' option list  */\n.suey-dropdown.suey-selected, .suey-dropdown:not(.suey-selected):enabled:active {\n    background-color: rgba(var(--darklight), 1);\n    background-image: none;\n    border: var(--border-micro) solid rgb(var(--icon));\n    outline: var(--border-small) solid rgb(var(--darklight));\n    border-radius: 0;\n}\n\n/** Color input attached to Button */\n.suey-color-input-button {\n    position: absolute;\n    cursor: pointer;\n    margin: 0;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0.0;\n}\n\n/** Div used for a Dropdown Color Button */\n.suey-drop-color {\n    background-color: #ff0000;\n    width: calc(100% - 0.5em);\n    height: 1.1em;\n    border: var(--border-micro) solid rgba(var(--shadow), 0.75);\n    border-radius: var(--radius-small);\n}\n\n/********** CLASS: Drop Arrow (adds a little down arrow on right side of element) **********/\n\n.suey-drop-arrow {\n    padding-right: 1.4em;\n}\n.suey-drop-arrow::after {\n    content: '';\n    position: absolute;\n    pointer-events: none;\n    width: 0;\n    height: 0;\n    right: 0.65em;\n    top: 50%;\n    transform: translateY(-25%);\n    z-index: 101; /* Drop Arrow */\n    border: var(--arrow-size) solid transparent;\n    border-color: rgba(var(--text-light)) transparent transparent transparent;\n    transition: all var(--menu-timing);\n}\n.suey-drop-arrow:hover::after, .suey-drop-arrow.suey-selected::after {\n    border-color: rgba(var(--highlight)) transparent transparent transparent;\n}\n.suey-drop-arrow.suey-selected::after {\n    transform: translateY(-75%) scale(1.0, -1.0);\n}\n\n/********** CLASS: <input> Number **********/\n\n/** Hide Arrow Spinners - Firefox (input[type=number] {}) */\n.suey-number {\n    -moz-appearance: textfield;\n}\n\n.suey-number {\n    font-size: 100%;\n}\n\n.suey-number-holder {\n    position: relative;\n    display: flex;\n    margin: 0;\n    padding: 0;\n}\n\n.suey-number-label-box {\n    pointer-events: none;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    padding: 0 var(--pad-smallish);\n    color: rgba(var(--text-dark), 1);\n}\n\n/********** ELEMENT: <input> Slider **********/\n\n.suey-slide-container {\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n}\n\n.suey-tick-marks {\n    --divides: 10; /* (max - min) / step */\n\n    position: absolute;\n    pointer-events: none;\n\n    width: calc(100% - (var(--pad-large) * 2));\n    height: 0.2em;\n    left: var(--pad-large);\n    top: 1.2em;\n    padding: 0;\n    margin: 0;\n\n    background-image: repeating-linear-gradient(to right,\n        rgba(var(--icon), 0.75) 0 1px, transparent 1px calc((100% - var(--pad-micro)) / var(--divides)));\n}\n\n.suey-slider {\n    --middle: 0.5; /* (value - min) / (max - min) */\n\n    -webkit-appearance: none;\n    position: absolute;\n    width: 98%;\n    padding: 0;\n    height: 0.375em;\n    top: calc(50% - 0.375em);\n\n    background: linear-gradient(to right,\n        rgba(var(--icon), 0.65) 0%, rgba(var(--icon), 0.65) calc(var(--middle) * 100%),\n        rgba(var(--background-dark), 0.5) calc(var(--middle) * 100%), rgba(var(--background-dark), 0.5) 100%);\n    border: var(--border-micro) solid transparent;\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    border-radius: var(--radius-large);\n    outline: var(--border-micro) solid transparent;\n\n    cursor: pointer;\n}\n\n.suey-slider:hover, .suey-slider:focus, .suey-slider:active {\n    background: linear-gradient(to right,\n        rgba(var(--icon-light), 0.65) 0%, rgba(var(--icon-light), 0.65) calc(var(--middle) * 100%),\n        rgba(var(--darklight), 0.5) calc(var(--middle) * 100%), rgba(var(--darklight), 0.5) 100%);\n    border: var(--border-micro) solid transparent;\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    border-radius: var(--radius-large);\n    outline: var(--border-micro) solid transparent;\n}\n.suey-slider:active {\n    cursor: ew-resize;\n}\n\n/* Safari / Chrome Thumb */\n.suey-slider::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 1.1em;\n    height: 1.1em;\n    border: var(--border-micro) solid rgba(var(--background-dark), 1.0);\n    border-radius: 50%;\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.8), rgba(var(--icon-dark), 0.8));\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n}\n.suey-slider::-webkit-slider-thumb:hover, .suey-slider::-webkit-slider-thumb:active {\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 1.0), rgba(var(--icon-dark), 1.0));\n}\n.suey-slider::-webkit-slider-thumb:active { cursor: ew-resize; }\n\n/* Firefox thumb */\n.suey-slider::-moz-range-thumb {\n    width: 1.1em;\n    height: 1.1em;\n    border: var(--border-micro) solid rgba(var(--background-dark), 1.0);\n    border-radius: 50%;\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.8), rgba(var(--icon-dark), 0.8));\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n}\n.suey-slider::-moz-range-thumb:hover, .suey-slider::-moz-range-thumb:active {\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 1.0), rgba(var(--icon-dark), 1.0));\n}\n.suey-slider::-moz-range-thumb:active { cursor: ew-resize; }\n\n/********** ELEMENT: <textarea> Text Area **********/\n\n.suey-text-area {\n    color: rgba(var(--text), 1);\n    background-color: rgba(var(--background-dark), 0.35);\n    border: var(--pixel) solid rgba(var(--shadow), 1);\n    border-radius: var(--radius-large);\n    outline: none; /* for macos */\n    padding: var(--pad-x-small) var(--pad-smallish);\n    tab-size: 4;\n    white-space: pre;\n    word-wrap: normal;\n    vertical-align: top;\n}\n\n.suey-text-area:hover {\n    color: rgba(var(--highlight), 1);\n    background-color: rgba(var(--button-dark), 0.5);\n}\n\n.suey-text-area:focus {\n    color: rgba(var(--highlight), 1);\n    background: rgba(var(--darklight), 1);\n    border: var(--border-micro) solid rgb(var(--icon));\n    outline: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    border-radius: 0;\n}\n\n.suey-text-area::-webkit-scrollbar {\n    height: 0.4em;\n    width: 0.4em;\n    background: rgba(var(--shadow), 0.35);\n    border-radius: 0.2em;\n}\n\n.suey-text-area::-webkit-scrollbar-thumb:horizontal {\n    background: linear-gradient(to left, rgba(var(--text), 1), rgba(var(--text-dark), 1));\n    border-radius: 0.2em;\n}\n\n.suey-text-area::-webkit-scrollbar-thumb:vertical {\n    background: linear-gradient(to bottom, rgba(var(--text), 1), rgba(var(--text-dark), 1));\n    border-radius: 0.2em;\n}\n\n.suey-text-area::-webkit-scrollbar-corner {\n    background: rgba(var(--background-dark), 1);\n}\n\n.suey-text-area.success {\n    border-color: #8b8 !important;\n}\n\n.suey-text-area.fail {\n    border-color: #f00 !important;\n    background-color: rgba(255, 0, 0, 0.05);\n}\n\n/********** ELEMENT: <input> Text Box **********/\n\n.suey-text-box {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.suey-text-box::selection {\n    color: rgba(var(--blacklight), 1);\n    background-color: rgba(var(--icon), 1);\n}\n";
var stylesheet$b="/********** ELEMENT: <input> (number, text, etc) **********/\n\n.suey-input {\n    color: rgba(var(--text), 1);\n    background-color: rgba(var(--background-dark), 0.35);\n    box-shadow: inset 0 0.075em 0.15em 0 rgba(var(--shadow), 0.35);\n\n    border: var(--border-micro) solid rgba(var(--shadow), 0.5);\n    border-radius: var(--radius-small);\n    outline: var(--border-micro) solid rgba(var(--shadow), 0.0);\n    padding: var(--pad-x-small) var(--pad-smallish);\n    vertical-align: middle;\n    min-width: 1em;\n    text-align: left;\n}\n\n.suey-input:hover {\n    color: rgba(var(--highlight), 1);\n    background-color: rgba(var(--button-dark), 0.5);\n}\n\n.suey-input:focus {\n    color: rgba(var(--highlight), 1);\n    background: rgba(var(--darklight), 1);\n    border: var(--border-micro) solid rgb(var(--icon));\n    outline: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    border-radius: 0;\n}\n\n.suey-input.suey-valid-type {\n    color: rgba(var(--text), 1);\n    box-shadow:\n        inset 0 0 0 var(--pixel) rgba(var(--valid), 0.5),\n        inset 0 0.075em 0.5em 0 rgba(var(--shadow), 0.5);\n    padding-left: var(--pad-medium);\n    text-align: left !important;\n}\n\n.suey-input.suey-invalid-type {\n    color: rgba(var(--text), 0.35);\n    box-shadow:\n        inset 0 0 0 var(--pixel) rgba(var(--invalid), 0.5),\n        inset 0 0.075em 0.5em 0 rgba(var(--shadow), 0.5);\n    text-align: center !important;\n}\n\n.suey-input.suey-yes-drop {\n    color: rgba(var(--valid), 1);\n    background: rgba(var(--darklight), 1);\n    border-radius: 0;\n    border: var(--border-micro) solid rgb(var(--valid));\n    /* outline: var(--border-micro) solid rgb(var(--valid)); */\n    box-shadow: inset 0 0 0 var(--pixel) rgba(var(--valid), 0.5);\n    text-align: center !important;\n}\n\n.suey-input.suey-no-drop {\n    color: rgba(var(--invalid), 1.0);\n    background: rgba(var(--darklight), 1);\n    border-radius: 0;\n    border: var(--border-micro) solid rgb(var(--invalid));\n    /* outline: var(--border-micro) solid rgb(var(--invalid)); */\n    box-shadow: inset 0 0 0 var(--pixel) rgba(var(--invalid), 0.5);\n    text-align: center !important;\n}\n\n/** Hide Arrow Spinners - Chrome, Safari, Edge, Opera */\n.suey-input::-webkit-outer-spin-button,\n.suey-input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n}\n\n/********** ELEMENT: <button> Button **********/\n\n.suey-button {\n    /* display: flex; */\n    position: relative;\n\n    cursor: pointer;\n    pointer-events: all;\n\n    color: rgba(var(--text-light), 1);\n\n    border: var(--border-micro) solid rgba(var(--shadow), 0.75);\n    border-radius: var(--radius-small);\n    outline: var(--border-micro) solid rgba(var(--darklight), 0.0);\n\n    background-color: rgba(var(--button-dark), 0.75);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.5), rgba(var(--icon-dark), 0.5));\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n\n    font-size: var(--font-size);\n    margin: 0;\n    padding: var(--pad-x-small) var(--pad-medium);\n\n    overflow: hidden;\n    text-align: center;\n    text-overflow: ellipsis;\n    vertical-align: middle;\n    white-space: nowrap;\n}\n\n.suey-button:not(.suey-selected):enabled:hover {\n    filter: brightness(1.25);\n}\n\n.suey-button:not(.suey-selected):focus {\n    outline: var(--border-micro) solid rgba(var(--highlight), 0.5);\n}\n\n.suey-button:not(.suey-selected):enabled:active {\n    color: rgba(var(--text-dark), 1);\n    background-color: rgba(var(--background-dark), 0.5);\n    background-image: none;\n    box-shadow: inset 0 var(--pad-micro) var(--pad-x-small) 0 rgba(var(--shadow), 0.75); /* sunk-in-shadow */\n}\n\n.suey-button.suey-selected {\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom left, rgba(var(--icon-light), 0.20), rgba(var(--icon), 0.20));\n    box-shadow: inset 0 var(--pad-micro) var(--pad-x-small) 0 rgba(var(--shadow), 0.75); /* sunk-in-shadow */\n}\n\n.suey-button:disabled {\n    pointer-events: none;\n}\n\n.suey-button:disabled {\n    filter: contrast(75%) grayscale(100%) brightness(50%);\n}\n\n/* Little borderless buttons */\n.suey-borderless-button {\n    user-select: none;\n    border: none;\n    border-radius: var(--radius-large);\n    background: transparent;\n    box-shadow: none;\n    outline: none;\n\n    min-height: 1.5em;\n    min-width: 1.5em;\n}\n\n.suey-borderless-button:not(.suey-selected):enabled:hover {\n    background-image: linear-gradient(to bottom, rgba(var(--white), 0.1), rgba(var(--white), 0.2));\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) 0 rgba(var(--white), 0.25),\n        inset var(--pixel) var(--minus) var(--pixel) 0 rgba(var(--black), 0.25);\n}\n\n.suey-borderless-button:not(.suey-selected):enabled:active {\n    background-image: linear-gradient(to bottom, rgba(var(--black), 0.2), rgba(var(--black), 0.1));\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) 0 rgba(var(--black), 0.5),\n        inset var(--pixel) var(--minus) var(--pixel) 0 rgba(var(--black), 0.5);\n}\n\n/********** ELEMENT: <input> Checkbox **********/\n\n/* Container */\n.suey-checkbox {\n    background: transparent;\n    display: inline-block;\n    position: relative;\n    justify-content: left;\n    cursor: pointer;\n    margin-left: 0.1em;\n}\n\n/* Native Element (holds checkbox value) */\n.suey-checkbox-input {\n    opacity: 0;\n    width: 0;\n    height: 0;\n}\n\n/* Visible Background: Unchecked */\n.suey-checkbox-button {\n    flex-grow: 0;\n    flex-shrink: 0;\n    position: absolute;\n    color: rgba(var(--text), 1);\n    background-image: none;\n    background-color: rgba(var(--background-dark), 0.5);\n    box-shadow: inset 0 var(--pad-micro) var(--pad-x-small) 0 rgba(var(--shadow), 0.35); /* sunk-in-shadow */\n    left: 0;\n    top: 50%;\n    width: 2.0em;\n    height: 1.20em;\n    border-radius: 1.0em;\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    transform: translateY(-50%);\n    transition: transform var(--menu-timing);\n}\n\n/* Visible Background: Checked */\n.suey-checkbox-input:checked + .suey-checkbox-button {\n    --bg-color-light: var(--icon-light);\n    --bg-color-dark: var(--icon-dark);\n    background-color: rgba(var(--highlight), 0.2);\n    background-image: linear-gradient(to bottom, rgba(var(--bg-color-light), 0.7), rgba(var(--bg-color-dark), 0.7));\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n}\n\n/* Visible Background: Checked & Hover */\n.suey-checkbox-input:checked:hover + .suey-checkbox-button {\n    background-color: rgba(var(--highlight), 0.5);\n}\n\n/* Button: Unchecked */\n.suey-checkbox-button:before {\n    content: '';\n    flex-grow: 0;\n    flex-shrink: 0;\n    position: absolute;\n    left: 0.2em;\n    top: 50%;\n    width: 0.65em;\n    height: 0.65em;\n    background-color: rgba(var(--text-light), 0.8);\n    border-radius: 1em;\n    transform: translate(0, -50%);\n    transition: transform var(--menu-timing);\n}\n\n/* Button: Checked */\n.suey-checkbox-input:checked + .suey-checkbox-button:before {\n    /* background-color: rgba(var(--highlight), 0.7); */\n    box-shadow: 0px 0px 3px 2px rgba(var(--shadow), 0.5); /* drop shadow */\n    transform: translate(0.75em, -50%);\n    transition: transform var(--menu-timing);\n}\n\n/* Button: Hover, Unchecked */\n.suey-checkbox-input:hover + .suey-checkbox-button:before {\n    background-color: rgba(var(--highlight), 0.9);\n}\n\n/********** CLASS: Drop down buttons and menus **********/\n\n/** Buttons that drop down a 'select' option list  */\n.suey-dropdown.suey-selected, .suey-dropdown:not(.suey-selected):enabled:active {\n    background-color: rgba(var(--darklight), 1);\n    background-image: none;\n    border: var(--border-micro) solid rgb(var(--icon));\n    outline: var(--border-small) solid rgb(var(--darklight));\n    border-radius: 0;\n}\n\n/** Color input attached to Button */\n.suey-color-input-button {\n    position: absolute;\n    cursor: pointer;\n    margin: 0;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0.0;\n}\n\n/** Div used for a Dropdown Color Button */\n.suey-drop-color {\n    background-color: #ff0000;\n    width: calc(100% - 0.5em);\n    height: 1.1em;\n    border: var(--border-micro) solid rgba(var(--shadow), 0.75);\n    border-radius: var(--radius-small);\n}\n\n/********** CLASS: Drop Arrow (adds a little down arrow on right side of element) **********/\n\n.suey-drop-arrow {\n    padding-right: 1.4em;\n}\n.suey-drop-arrow::after {\n    content: '';\n    position: absolute;\n    pointer-events: none;\n    width: 0;\n    height: 0;\n    right: 0.65em;\n    top: 50%;\n    transform: translateY(-25%);\n    z-index: 101; /* Drop Arrow */\n    border: var(--arrow-size) solid transparent;\n    border-color: rgba(var(--text-light)) transparent transparent transparent;\n    transition: all var(--menu-timing);\n}\n.suey-drop-arrow:hover::after, .suey-drop-arrow.suey-selected::after {\n    border-color: rgba(var(--highlight)) transparent transparent transparent;\n}\n.suey-drop-arrow.suey-selected::after {\n    transform: translateY(-75%) scale(1.0, -1.0);\n}\n\n/********** CLASS: <input> Number **********/\n\n/** Hide Arrow Spinners - Firefox (input[type=number] {}) */\n.suey-number {\n    -moz-appearance: textfield;\n}\n\n.suey-number {\n    font-size: 100%;\n}\n\n.suey-number-holder {\n    position: relative;\n    display: flex;\n    margin: 0;\n    padding: 0;\n}\n\n.suey-number-label-box {\n    pointer-events: none;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    padding: 0 var(--pad-smallish);\n    color: rgba(var(--text-dark), 1);\n}\n\n/********** ELEMENT: <input> Slider **********/\n\n.suey-slide-container {\n    position: relative;\n    overflow: hidden;\n    width: 100%;\n}\n\n.suey-tick-marks {\n    --divides: 10; /* (max - min) / step */\n\n    position: absolute;\n    pointer-events: none;\n\n    width: calc(100% - (var(--pad-large) * 2));\n    height: 0.2em;\n    left: var(--pad-large);\n    top: 1.2em;\n    padding: 0;\n    margin: 0;\n\n    background-image: repeating-linear-gradient(to right,\n        rgba(var(--icon), 0.75) 0 1px, transparent 1px calc((100% - var(--pad-micro)) / var(--divides)));\n}\n\n.suey-slider {\n    --middle: 0.5; /* (value - min) / (max - min) */\n\n    -webkit-appearance: none;\n    position: absolute;\n    width: 98%;\n    padding: 0;\n    height: 0.375em;\n    top: calc(50% - 0.375em);\n\n    background: linear-gradient(to right,\n        rgba(var(--icon), 0.65) 0%, rgba(var(--icon), 0.65) calc(var(--middle) * 100%),\n        rgba(var(--background-dark), 0.5) calc(var(--middle) * 100%), rgba(var(--background-dark), 0.5) 100%);\n    border: var(--border-micro) solid transparent;\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    border-radius: var(--radius-large);\n    outline: var(--border-micro) solid transparent;\n\n    cursor: pointer;\n}\n\n.suey-slider:hover, .suey-slider:focus, .suey-slider:active {\n    background: linear-gradient(to right,\n        rgba(var(--icon-light), 0.65) 0%, rgba(var(--icon-light), 0.65) calc(var(--middle) * 100%),\n        rgba(var(--darklight), 0.5) calc(var(--middle) * 100%), rgba(var(--darklight), 0.5) 100%);\n    border: var(--border-micro) solid transparent;\n    border: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    border-radius: var(--radius-large);\n    outline: var(--border-micro) solid transparent;\n}\n.suey-slider:active {\n    cursor: ew-resize;\n}\n\n/* Safari / Chrome Thumb */\n.suey-slider::-webkit-slider-thumb {\n    -webkit-appearance: none;\n    appearance: none;\n    width: 1.1em;\n    height: 1.1em;\n    border: var(--border-micro) solid rgba(var(--background-dark), 1.0);\n    border-radius: 50%;\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.8), rgba(var(--icon-dark), 0.8));\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n}\n.suey-slider::-webkit-slider-thumb:hover, .suey-slider::-webkit-slider-thumb:active {\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 1.0), rgba(var(--icon-dark), 1.0));\n}\n.suey-slider::-webkit-slider-thumb:active { cursor: ew-resize; }\n\n/* Firefox thumb */\n.suey-slider::-moz-range-thumb {\n    width: 1.1em;\n    height: 1.1em;\n    border: var(--border-micro) solid rgba(var(--background-dark), 1.0);\n    border-radius: 50%;\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.8), rgba(var(--icon-dark), 0.8));\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n}\n.suey-slider::-moz-range-thumb:hover, .suey-slider::-moz-range-thumb:active {\n    background-color: rgba(var(--shadow), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 1.0), rgba(var(--icon-dark), 1.0));\n}\n.suey-slider::-moz-range-thumb:active { cursor: ew-resize; }\n\n/********** ELEMENT: <textarea> Text Area **********/\n\n.suey-text-area {\n    color: rgba(var(--text), 1);\n    background-color: rgba(var(--background-dark), 0.35);\n    border: var(--pixel) solid rgba(var(--shadow), 1);\n    border-radius: var(--radius-large);\n    outline: none; /* for macos */\n    padding: var(--pad-x-small) var(--pad-smallish);\n    tab-size: 4;\n    white-space: pre;\n    word-wrap: normal;\n    vertical-align: top;\n}\n\n.suey-text-area:hover {\n    color: rgba(var(--highlight), 1);\n    background-color: rgba(var(--button-dark), 0.5);\n}\n\n.suey-text-area:focus {\n    color: rgba(var(--highlight), 1);\n    background: rgba(var(--darklight), 1);\n    border: var(--border-micro) solid rgb(var(--icon));\n    outline: var(--border-micro) solid rgba(var(--shadow), 1.0);\n    border-radius: 0;\n}\n\n.suey-text-area::-webkit-scrollbar {\n    height: 0.4em;\n    width: 0.4em;\n    background: rgba(var(--shadow), 0.35);\n    border-radius: 0.2em;\n}\n\n.suey-text-area::-webkit-scrollbar-thumb:horizontal {\n    background: linear-gradient(to left, rgba(var(--text), 1), rgba(var(--text-dark), 1));\n    border-radius: 0.2em;\n}\n\n.suey-text-area::-webkit-scrollbar-thumb:vertical {\n    background: linear-gradient(to bottom, rgba(var(--text), 1), rgba(var(--text-dark), 1));\n    border-radius: 0.2em;\n}\n\n.suey-text-area::-webkit-scrollbar-corner {\n    background: rgba(var(--background-dark), 1);\n}\n\n.suey-text-area.success {\n    border-color: #8b8 !important;\n}\n\n.suey-text-area.fail {\n    border-color: #f00 !important;\n    background-color: rgba(255, 0, 0, 0.05);\n}\n\n/********** ELEMENT: <input> Text Box **********/\n\n.suey-text-box {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.suey-text-box::selection {\n    color: rgba(var(--blacklight), 1);\n    background-color: rgba(var(--icon), 1);\n}\n";
styleInject(css_248z$b);

var css_248z$a = "/********** Absolute Box **********/\n\n.suey-absolute-box {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    align-items: center;\n    vertical-align: middle;\n    justify-content: center;\n    text-align: center;\n}\n\n/********** Asset Box / Asset Box Icon Only **********/\n\n.suey-asset-box {\n    position: relative;\n    display: flex;\n    cursor: pointer;\n\n    border: var(--border-small) solid transparent;\n    border-radius: var(--radius-large);\n    margin: var(--pad-x-small);\n    vertical-align: middle;\n\n    outline: none; /* for macos */\n}\n\n.suey-asset-box-selectable:hover {\n    background-color: rgba(var(--highlight), 0.15);\n    border: var(--border-small) solid rgba(var(--shadow), 0.5);\n    border-radius: var(--radius-large);\n}\n\n.suey-asset-box-selectable:active, .suey-asset-box-selectable:focus {\n    background-color: rgba(var(--shadow), 1.0);\n    border: var(--border-small) solid rgba(var(--icon-light), 1);\n    border-radius: 0;\n}\n\n.suey-asset-box-selectable:focus > *, .suey-asset-box-selectable:active > * {\n    filter: brightness(100%);\n}\n\n.suey-asset-box-selectable:hover > * {\n    filter: brightness(150%);\n}\n\n.suey-asset-box-mini {\n    /* Minimum Icon Size: */\n    min-width: var(--asset-size);\n    min-height: var(--asset-size);\n}\n\n.suey-asset-box-row {\n    width: 100%;\n    min-height: 2em;\n    padding: var(--pad-x-small);\n}\n\n.suey-asset-box-icon {\n    position: relative;\n    min-width: var(--row-height);\n    height: 100%;\n}\n\n.suey-asset-box-text {\n    position: relative;\n    width: calc(100% - var(--row-height));\n    margin: auto;\n    margin-left: 0.25em;\n    white-space: nowrap;\n}\n\n.suey-asset-box-combo {\n    overflow: hidden;\n    position: relative;\n}\n.suey-asset-box-combo:hover {\n    overflow: visible;\n}\n.suey-asset-box-label {\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%) scale(75%);\n}\n\n/********** Flex Box **********/\n\n.suey-flex-box {\n    display: flex;\n    align-items: center;\n    vertical-align: middle;\n}\n\n/********** Row **********/\n\n.suey-row {\n    padding: var(--pad-micro) var(--border-small);\n    margin: 0;\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: left;\n    vertical-align: middle;\n}\n\n/********** Shadow Box **********/\n\n.suey-shadow-box { /* affects Toolbar icons! */\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 80%;\n    height: 80%;\n    margin: 0;\n    padding: 0;\n    overflow: visible;\n}\n\n.suey-shadow-box.suey-full-size {\n    width: 100%;\n    height: 100%;\n}\n\n.suey-shadow-box.suey-drop-shadow > * {\n    filter: var(--drop-shadow);\n}\n\n.suey-shadow-box.suey-even-shadow > * {\n    filter: var(--drop-shadow);\n}\n\n/********** Vector Box **********/\n\n.suey-vector-box {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    overflow: visible;\n}\n";
var stylesheet$a="/********** Absolute Box **********/\n\n.suey-absolute-box {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    left: 0;\n    top: 0;\n    padding: 0;\n    margin: 0;\n    display: flex;\n    align-items: center;\n    vertical-align: middle;\n    justify-content: center;\n    text-align: center;\n}\n\n/********** Asset Box / Asset Box Icon Only **********/\n\n.suey-asset-box {\n    position: relative;\n    display: flex;\n    cursor: pointer;\n\n    border: var(--border-small) solid transparent;\n    border-radius: var(--radius-large);\n    margin: var(--pad-x-small);\n    vertical-align: middle;\n\n    outline: none; /* for macos */\n}\n\n.suey-asset-box-selectable:hover {\n    background-color: rgba(var(--highlight), 0.15);\n    border: var(--border-small) solid rgba(var(--shadow), 0.5);\n    border-radius: var(--radius-large);\n}\n\n.suey-asset-box-selectable:active, .suey-asset-box-selectable:focus {\n    background-color: rgba(var(--shadow), 1.0);\n    border: var(--border-small) solid rgba(var(--icon-light), 1);\n    border-radius: 0;\n}\n\n.suey-asset-box-selectable:focus > *, .suey-asset-box-selectable:active > * {\n    filter: brightness(100%);\n}\n\n.suey-asset-box-selectable:hover > * {\n    filter: brightness(150%);\n}\n\n.suey-asset-box-mini {\n    /* Minimum Icon Size: */\n    min-width: var(--asset-size);\n    min-height: var(--asset-size);\n}\n\n.suey-asset-box-row {\n    width: 100%;\n    min-height: 2em;\n    padding: var(--pad-x-small);\n}\n\n.suey-asset-box-icon {\n    position: relative;\n    min-width: var(--row-height);\n    height: 100%;\n}\n\n.suey-asset-box-text {\n    position: relative;\n    width: calc(100% - var(--row-height));\n    margin: auto;\n    margin-left: 0.25em;\n    white-space: nowrap;\n}\n\n.suey-asset-box-combo {\n    overflow: hidden;\n    position: relative;\n}\n.suey-asset-box-combo:hover {\n    overflow: visible;\n}\n.suey-asset-box-label {\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%) scale(75%);\n}\n\n/********** Flex Box **********/\n\n.suey-flex-box {\n    display: flex;\n    align-items: center;\n    vertical-align: middle;\n}\n\n/********** Row **********/\n\n.suey-row {\n    padding: var(--pad-micro) var(--border-small);\n    margin: 0;\n    position: relative;\n    display: flex;\n    align-items: center;\n    justify-content: left;\n    vertical-align: middle;\n}\n\n/********** Shadow Box **********/\n\n.suey-shadow-box { /* affects Toolbar icons! */\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 80%;\n    height: 80%;\n    margin: 0;\n    padding: 0;\n    overflow: visible;\n}\n\n.suey-shadow-box.suey-full-size {\n    width: 100%;\n    height: 100%;\n}\n\n.suey-shadow-box.suey-drop-shadow > * {\n    filter: var(--drop-shadow);\n}\n\n.suey-shadow-box.suey-even-shadow > * {\n    filter: var(--drop-shadow);\n}\n\n/********** Vector Box **********/\n\n.suey-vector-box {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n    overflow: visible;\n}\n";
styleInject(css_248z$a);

var css_248z$9 = "/********** Menu Show (Show menu that was previously hidden) **********/\n\n.suey-menu.suey-menu-show {\n    pointer-events: auto;\n    opacity: 1.0;\n    transform: translate(0, 0) scale(1.0, 1.0);\n}\n\n.suey-menu.suey-menu-show.suey-menu-under {\n    left: 50%;\n    top: 100%;\n    transform: translate(-50%, 0) scale(1.0, 1.0);\n}\n\n/********** Menu **********/\n\n/* Normal Menu Styling */\n.suey-menu {\n    position: absolute;\n    display: block;\n    align-items: center;\n    justify-content: center;\n\n    color: rgba(var(--text), 1.0);\n    background-color: rgba(var(--background-light), 1);\n    box-shadow:\n        inset 0px 1px 2px 0px rgba(var(--midlight), 1.0),\n             -2px 2px 2px 0px rgba(var(--shadow), 0.5),\n              2px 0px 2px 0px rgba(var(--shadow), 0.5);\n    /* border: 1px solid rgba(var(--shadow), 1.0); */\n    border: 2px solid rgba(var(--icon), 1.0);\n    border-radius: var(--radius-large);\n    /* outline: 1px solid rgba(var(--background-light), calc(var(--panel-transparency) * 0.5)); */\n    outline: none;\n\n    min-width: 1.0em;\n    z-index: 1000; /* Menu */\n    opacity: 0;\n    padding: var(--pad-x-small);\n    margin: 0;\n    pointer-events: none;\n\n    transform: translate(0, 0) scale(1.0, 0.0);\n\n    /* To enable menu transitions use menu timing variable */\n    transition: all 0s; /* var(--menu-timing) */\n}\n\n.suey-border-icon {\n    border: 2px solid rgba(var(--complement), 1.0);\n}\n\n.suey-menu-under {\n    transition: opacity 0.2s ease-in-out;\n}\n\n.suey-menu:not(.suey-menu-show).suey-slide-down {\n    transform: translate(0, -50%) scale(1.0, 0.0);\n}\n\n.suey-menu:not(.suey-menu-show).suey-slide-up {\n    transform: translate(0, 50%) scale(1.0, 0.0);\n}\n\n/* Dropdown Menu Styling */\n.suey-select-menu, .suey-popup-menu {\n    box-shadow: none;\n    color: rgba(var(--highlight), 1);\n    background: rgba(var(--darklight), 1);\n    border: 1px solid rgb(var(--icon));\n    border-radius: 0px;\n    outline: 2px solid rgb(var(--darklight));\n    z-index: 1000; /* Select Menu */\n}\n\n/* Menu Item */\n.suey-menu-item {\n    position: relative;\n    display: block;\n\n    color: rgba(var(--text), 1);\n    cursor: pointer;\n\n    border: 1px solid transparent;\n    border-radius: calc(var(--radius-small) * 0.75);\n\n    margin: var(--pad-x-small);\n    white-space: nowrap;\n}\n\n/* Hover Item */\n.suey-menu:not(.suey-invisible-menu) .suey-menu-item:not(.suey-disabled):hover {\n    color: rgba(var(--highlight), 1);\n    background-color: rgba(var(--icon-light), 0.1);\n    border: 1px solid rgba(var(--icon-light), 0.3);\n    border-radius: calc(var(--radius-small) * 0.75);\n}\n\n/* Image */\n.suey-menu-icon {\n    --menu-icon-size:   1.45em;\n\n    position: relative;\n    flex: 0 0 auto;\n    height: var(--menu-icon-size);\n    width: var(--menu-icon-size);\n    filter: var(--drop-shadow);\n    overflow: hidden;\n}\n\n/* Text */\n.suey-menu-text {\n    user-select: none;\n    margin-left: 7px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n/* Shortcut Key */\n.suey-menu-shortcut {\n    /*\n    System Font Info:\n    https://stackoverflow.com/questions/32660748/how-to-use-apples-new-san-francisco-font-on-a-webpage\n    https://furbo.org/2018/03/28/system-fonts-in-css/\n    https://css-tricks.com/snippets/css/system-font-stack/\n    */\n    display: flex;\n    filter: contrast(75%) grayscale(100%);\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n    opacity: 0.5;\n    padding-left: 2.0em;\n}\n\n.suey-menu-shortcut-character {\n    /* background-color: blueviolet; */\n    /* border: solid 1px; */\n    text-align: center;\n    margin: auto;\n}\n\n/* Separator */\n.suey-menu-separator {\n    pointer-events: none;\n    border-top: 1px solid rgba(var(--midlight), 0.5);\n    border-radius: 1px;\n    height: 1px;\n    margin: var(--pad-medium) var(--pad-large);\n}\n\n/* Little Arrow */\n.suey-menu:not(.suey-invisible-menu) .suey-sub-menu-item::after {\n    content: '';\n    position: absolute;\n    right: 0.50em;\n    top: 50%;\n    transform: translateY(-50%);\n    border: var(--arrow-size) solid transparent;\n    border-left-color: rgba(var(--text), 1.0);\n}\n\n.suey-menu:not(.suey-invisible-menu) .suey-sub-menu-item:hover::after {\n    border-left-color: rgba(var(--highlight), 1.0);\n}\n\n/* Sub Menu */\n.suey-menu-item .suey-menu {\n    top:  0px;\n    left: 101%;\n}\n\n/* Sub Menu Mouse Triangle */\n.suey-menu-mouse-triangle {\n    position: absolute;\n}\n\n/***** Invisible Hover Menu *****/\n\n.suey-invisible-menu, .suey-invisible-menu-item {\n    color: transparent;\n    background-color: transparent;\n    box-shadow: none;\n    border: none;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    padding: 0;\n}\n\n.suey-invisible-menu-item {\n    margin: 0;\n}\n\n/************ Toolbar Button **********/\n\n.suey-toolbar-button {\n    display: flex;\n    cursor: pointer;\n    background-color: transparent !important;\n    border: none;\n    border-radius: var(--radius-large);\n    outline: none;\n    position: relative;\n    height: var(--button-size);\n    width: var(--button-size);\n    min-height: var(--button-size);\n    min-width: var(--button-size);\n    margin-left: var(--pad-x-small);\n    margin-right: var(--pad-x-small);\n    opacity: 1.0;\n    overflow: hidden;\n}\n\n/* Background */\n.suey-button-background {\n    pointer-events: none;\n    position: absolute;\n    left: 0; right: 0; top: 0; bottom: 0;\n    margin: 0;\n    background-color: rgb(var(--darkness));\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.6), rgba(var(--icon), 0.6));\n    border-radius: var(--radius-large);\n    border: none;\n    outline: none;\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) rgba(var(--white), 0.25),\n        inset var(--pixel) var(--minus) var(--pixel) rgba(var(--black), 0.25);\n    z-index: -1;\n}\n\n/* Hover */\n.suey-toolbar-button:not(.suey-selected):enabled:hover > .suey-button-background {\n    filter: brightness(125%);\n    box-shadow: /* pop-out-shadow */\n        inset var(--pixel) 0 var(--pixel) 0 rgba(var(--black), 0.25),\n        inset var(--minus) 0 var(--pixel) 0 rgba(var(--black), 0.25),\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.15),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.15);\n}\n\n/* Active / Selected */\n.suey-toolbar-button:not(.suey-selected):enabled:active,\n.suey-toolbar-button.suey-selected:enabled {\n    box-shadow: inset var(--minus) var(--pixel) var(--pad-small) rgba(0, 0, 0, 0.5); /* sunk-in-shadow */\n}\n.suey-toolbar-button:not(.suey-selected):enabled:active > .suey-button-background,\n.suey-toolbar-button.suey-selected:enabled > .suey-button-background {\n    filter: brightness(50%) grayscale(20%);\n}\n\n/* Hover Active */\n.suey-hover-active {\n    overflow: visible;\n}\n.suey-hover-active:hover, .suey-hover-active:active {\n    box-shadow: inset var(--minus) var(--pixel) var(--pad-small) rgba(0, 0, 0, 0.5) !important; /* sunk-in-shadow */\n}\n.suey-hover-active:hover > .suey-button-background,\n.suey-hover-active:active > .suey-button-background {\n    filter: brightness(50%) grayscale(20%) !important;\n}\n\n/* Disabled Button */\n.suey-toolbar-button:disabled {\n    background-color: rgba(var(--button-dark), var(--panel-transparency));\n    box-shadow: none;\n}\n.suey-toolbar-button:disabled {\n    filter: none;\n}\n.suey-toolbar-button:disabled > * {\n    filter: contrast(75%) grayscale(100%) brightness(50%);\n}\n\n/* Left / Middle / Right */\n.suey-button-left, .suey-button-left > .suey-button-background {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    margin-right: 0;\n}\n.suey-button-middle, .suey-button-middle > .suey-button-background {\n    border-radius: 0;\n    margin-right: 0;\n    margin-left: 0;\n}\n.suey-button-right, .suey-button-right > .suey-button-background {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    margin-left: 0;\n}\n\n.suey-button-left > .suey-button-background {\n    box-shadow: /* pop-out-shadow */\n        inset            0 var(--pixel) rgba(var(--white), 0.25),\n        inset var(--pixel) var(--minus) var(--pixel) rgba(var(--black), 0.25);\n}\n.suey-button-middle > .suey-button-background {\n    box-shadow: /* pop-out-shadow */\n        inset            0 var(--pixel) rgba(var(--white), 0.25),\n        inset            0 var(--minus) rgba(var(--black), 0.25);\n}\n.suey-button-right > .suey-button-background {\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) rgba(var(--white), 0.25),\n        inset            0 var(--minus) rgba(var(--black), 0.25);\n}\n\n/********** Toolbar Separator / Toolbar Spacer **********/\n\n.suey-toolbar-separator {\n    border-left: solid var(--border-micro) rgba(var(--shadow), 0.50);\n    border-right: solid var(--border-micro) rgba(var(--shadow), 0.15);\n    border-top: 0;\n    border-bottom: 0;\n    width: var(--pad-micro);\n    height: calc(var(--button-size) - 1.25ch);\n    margin-left: var(--pad-medium);\n    margin-right: var(--pad-medium);\n    margin-top: var(--pad-small);\n}\n\n.suey-toolbar-spacer {\n    pointer-events: none;\n    border: none;\n    margin: none;\n    width: 1em;\n    height: var(--button-size);\n}\n";
var stylesheet$9="/********** Menu Show (Show menu that was previously hidden) **********/\n\n.suey-menu.suey-menu-show {\n    pointer-events: auto;\n    opacity: 1.0;\n    transform: translate(0, 0) scale(1.0, 1.0);\n}\n\n.suey-menu.suey-menu-show.suey-menu-under {\n    left: 50%;\n    top: 100%;\n    transform: translate(-50%, 0) scale(1.0, 1.0);\n}\n\n/********** Menu **********/\n\n/* Normal Menu Styling */\n.suey-menu {\n    position: absolute;\n    display: block;\n    align-items: center;\n    justify-content: center;\n\n    color: rgba(var(--text), 1.0);\n    background-color: rgba(var(--background-light), 1);\n    box-shadow:\n        inset 0px 1px 2px 0px rgba(var(--midlight), 1.0),\n             -2px 2px 2px 0px rgba(var(--shadow), 0.5),\n              2px 0px 2px 0px rgba(var(--shadow), 0.5);\n    /* border: 1px solid rgba(var(--shadow), 1.0); */\n    border: 2px solid rgba(var(--icon), 1.0);\n    border-radius: var(--radius-large);\n    /* outline: 1px solid rgba(var(--background-light), calc(var(--panel-transparency) * 0.5)); */\n    outline: none;\n\n    min-width: 1.0em;\n    z-index: 1000; /* Menu */\n    opacity: 0;\n    padding: var(--pad-x-small);\n    margin: 0;\n    pointer-events: none;\n\n    transform: translate(0, 0) scale(1.0, 0.0);\n\n    /* To enable menu transitions use menu timing variable */\n    transition: all 0s; /* var(--menu-timing) */\n}\n\n.suey-border-icon {\n    border: 2px solid rgba(var(--complement), 1.0);\n}\n\n.suey-menu-under {\n    transition: opacity 0.2s ease-in-out;\n}\n\n.suey-menu:not(.suey-menu-show).suey-slide-down {\n    transform: translate(0, -50%) scale(1.0, 0.0);\n}\n\n.suey-menu:not(.suey-menu-show).suey-slide-up {\n    transform: translate(0, 50%) scale(1.0, 0.0);\n}\n\n/* Dropdown Menu Styling */\n.suey-select-menu, .suey-popup-menu {\n    box-shadow: none;\n    color: rgba(var(--highlight), 1);\n    background: rgba(var(--darklight), 1);\n    border: 1px solid rgb(var(--icon));\n    border-radius: 0px;\n    outline: 2px solid rgb(var(--darklight));\n    z-index: 1000; /* Select Menu */\n}\n\n/* Menu Item */\n.suey-menu-item {\n    position: relative;\n    display: block;\n\n    color: rgba(var(--text), 1);\n    cursor: pointer;\n\n    border: 1px solid transparent;\n    border-radius: calc(var(--radius-small) * 0.75);\n\n    margin: var(--pad-x-small);\n    white-space: nowrap;\n}\n\n/* Hover Item */\n.suey-menu:not(.suey-invisible-menu) .suey-menu-item:not(.suey-disabled):hover {\n    color: rgba(var(--highlight), 1);\n    background-color: rgba(var(--icon-light), 0.1);\n    border: 1px solid rgba(var(--icon-light), 0.3);\n    border-radius: calc(var(--radius-small) * 0.75);\n}\n\n/* Image */\n.suey-menu-icon {\n    --menu-icon-size:   1.45em;\n\n    position: relative;\n    flex: 0 0 auto;\n    height: var(--menu-icon-size);\n    width: var(--menu-icon-size);\n    filter: var(--drop-shadow);\n    overflow: hidden;\n}\n\n/* Text */\n.suey-menu-text {\n    user-select: none;\n    margin-left: 7px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n}\n\n/* Shortcut Key */\n.suey-menu-shortcut {\n    /*\n    System Font Info:\n    https://stackoverflow.com/questions/32660748/how-to-use-apples-new-san-francisco-font-on-a-webpage\n    https://furbo.org/2018/03/28/system-fonts-in-css/\n    https://css-tricks.com/snippets/css/system-font-stack/\n    */\n    display: flex;\n    filter: contrast(75%) grayscale(100%);\n    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n    opacity: 0.5;\n    padding-left: 2.0em;\n}\n\n.suey-menu-shortcut-character {\n    /* background-color: blueviolet; */\n    /* border: solid 1px; */\n    text-align: center;\n    margin: auto;\n}\n\n/* Separator */\n.suey-menu-separator {\n    pointer-events: none;\n    border-top: 1px solid rgba(var(--midlight), 0.5);\n    border-radius: 1px;\n    height: 1px;\n    margin: var(--pad-medium) var(--pad-large);\n}\n\n/* Little Arrow */\n.suey-menu:not(.suey-invisible-menu) .suey-sub-menu-item::after {\n    content: '';\n    position: absolute;\n    right: 0.50em;\n    top: 50%;\n    transform: translateY(-50%);\n    border: var(--arrow-size) solid transparent;\n    border-left-color: rgba(var(--text), 1.0);\n}\n\n.suey-menu:not(.suey-invisible-menu) .suey-sub-menu-item:hover::after {\n    border-left-color: rgba(var(--highlight), 1.0);\n}\n\n/* Sub Menu */\n.suey-menu-item .suey-menu {\n    top:  0px;\n    left: 101%;\n}\n\n/* Sub Menu Mouse Triangle */\n.suey-menu-mouse-triangle {\n    position: absolute;\n}\n\n/***** Invisible Hover Menu *****/\n\n.suey-invisible-menu, .suey-invisible-menu-item {\n    color: transparent;\n    background-color: transparent;\n    box-shadow: none;\n    border: none;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    padding: 0;\n}\n\n.suey-invisible-menu-item {\n    margin: 0;\n}\n\n/************ Toolbar Button **********/\n\n.suey-toolbar-button {\n    display: flex;\n    cursor: pointer;\n    background-color: transparent !important;\n    border: none;\n    border-radius: var(--radius-large);\n    outline: none;\n    position: relative;\n    height: var(--button-size);\n    width: var(--button-size);\n    min-height: var(--button-size);\n    min-width: var(--button-size);\n    margin-left: var(--pad-x-small);\n    margin-right: var(--pad-x-small);\n    opacity: 1.0;\n    overflow: hidden;\n}\n\n/* Background */\n.suey-button-background {\n    pointer-events: none;\n    position: absolute;\n    left: 0; right: 0; top: 0; bottom: 0;\n    margin: 0;\n    background-color: rgb(var(--darkness));\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.6), rgba(var(--icon), 0.6));\n    border-radius: var(--radius-large);\n    border: none;\n    outline: none;\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) rgba(var(--white), 0.25),\n        inset var(--pixel) var(--minus) var(--pixel) rgba(var(--black), 0.25);\n    z-index: -1;\n}\n\n/* Hover */\n.suey-toolbar-button:not(.suey-selected):enabled:hover > .suey-button-background {\n    filter: brightness(125%);\n    box-shadow: /* pop-out-shadow */\n        inset var(--pixel) 0 var(--pixel) 0 rgba(var(--black), 0.25),\n        inset var(--minus) 0 var(--pixel) 0 rgba(var(--black), 0.25),\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.15),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.15);\n}\n\n/* Active / Selected */\n.suey-toolbar-button:not(.suey-selected):enabled:active,\n.suey-toolbar-button.suey-selected:enabled {\n    box-shadow: inset var(--minus) var(--pixel) var(--pad-small) rgba(0, 0, 0, 0.5); /* sunk-in-shadow */\n}\n.suey-toolbar-button:not(.suey-selected):enabled:active > .suey-button-background,\n.suey-toolbar-button.suey-selected:enabled > .suey-button-background {\n    filter: brightness(50%) grayscale(20%);\n}\n\n/* Hover Active */\n.suey-hover-active {\n    overflow: visible;\n}\n.suey-hover-active:hover, .suey-hover-active:active {\n    box-shadow: inset var(--minus) var(--pixel) var(--pad-small) rgba(0, 0, 0, 0.5) !important; /* sunk-in-shadow */\n}\n.suey-hover-active:hover > .suey-button-background,\n.suey-hover-active:active > .suey-button-background {\n    filter: brightness(50%) grayscale(20%) !important;\n}\n\n/* Disabled Button */\n.suey-toolbar-button:disabled {\n    background-color: rgba(var(--button-dark), var(--panel-transparency));\n    box-shadow: none;\n}\n.suey-toolbar-button:disabled {\n    filter: none;\n}\n.suey-toolbar-button:disabled > * {\n    filter: contrast(75%) grayscale(100%) brightness(50%);\n}\n\n/* Left / Middle / Right */\n.suey-button-left, .suey-button-left > .suey-button-background {\n    border-top-right-radius: 0;\n    border-bottom-right-radius: 0;\n    margin-right: 0;\n}\n.suey-button-middle, .suey-button-middle > .suey-button-background {\n    border-radius: 0;\n    margin-right: 0;\n    margin-left: 0;\n}\n.suey-button-right, .suey-button-right > .suey-button-background {\n    border-top-left-radius: 0;\n    border-bottom-left-radius: 0;\n    margin-left: 0;\n}\n\n.suey-button-left > .suey-button-background {\n    box-shadow: /* pop-out-shadow */\n        inset            0 var(--pixel) rgba(var(--white), 0.25),\n        inset var(--pixel) var(--minus) var(--pixel) rgba(var(--black), 0.25);\n}\n.suey-button-middle > .suey-button-background {\n    box-shadow: /* pop-out-shadow */\n        inset            0 var(--pixel) rgba(var(--white), 0.25),\n        inset            0 var(--minus) rgba(var(--black), 0.25);\n}\n.suey-button-right > .suey-button-background {\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) rgba(var(--white), 0.25),\n        inset            0 var(--minus) rgba(var(--black), 0.25);\n}\n\n/********** Toolbar Separator / Toolbar Spacer **********/\n\n.suey-toolbar-separator {\n    border-left: solid var(--border-micro) rgba(var(--shadow), 0.50);\n    border-right: solid var(--border-micro) rgba(var(--shadow), 0.15);\n    border-top: 0;\n    border-bottom: 0;\n    width: var(--pad-micro);\n    height: calc(var(--button-size) - 1.25ch);\n    margin-left: var(--pad-medium);\n    margin-right: var(--pad-medium);\n    margin-top: var(--pad-small);\n}\n\n.suey-toolbar-spacer {\n    pointer-events: none;\n    border: none;\n    margin: none;\n    width: 1em;\n    height: var(--button-size);\n}\n";
styleInject(css_248z$9);

var css_248z$8 = "/********** Panel (simple / fancy) **********/\n\n.suey-panel {\n    pointer-events: auto;\n    position: relative;\n    overflow: visible;\n    outline: none; /* for macos */\n    z-index: 0; /* Panel */\n}\n\n.suey-panel-simple {\n    --edge-thickness:       0.35714em;      /* 5px @ font size 1.4em (14px) */\n\n    background-color: rgba(var(--background-light), var(--panel-transparency));\n    border: var(--border-small) solid rgb(var(--icon));\n    border-radius: var(--radius-large);\n    margin: calc(var(--edge-thickness) + var(--pad-x-small));\n}\n\n.suey-panel-fancy-outer {\n    --edge-thickness:       0.35714em;      /* 5px @ font size 1.4em (14px) */\n    --border-radius-outer:  0.71429em;      /* 10px @ font size 1.4em (14px) */\n\n    height: 100%;\n\n    background-color: rgba(var(--background-light), calc(var(--panel-transparency) * 0.5));\n    border-radius: var(--border-radius-outer);\n    box-shadow: 0px 0px 5px 1px rgba(var(--shadow), 0.25);\n    padding: var(--edge-thickness); /* outside of border padding */\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.suey-panel-fancy-border {\n    height: 100%;\n\n    background-color: rgba(var(--background-light), var(--panel-transparency));\n    border: var(--border-small) solid rgb(var(--icon));\n    border-radius: var(--radius-large);\n    padding: var(--pad-x-small);\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n}\n\n.suey-window .suey-panel-fancy-border {\n    border: var(--border-small) solid rgb(var(--button-light));\n}\n.suey-window.suey-active-window .suey-panel-fancy-border {\n    border: var(--border-small) solid rgb(var(--icon));\n}\n\n.suey-panel-fancy-inside {\n    height: 100%;\n    width: 100%;\n    background-color: rgba(var(--icon-light), calc(var(--panel-transparency) * 0.05));\n    border-radius: var(--radius-small);\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n}\n\n/********** Scroller ********/\n\n.suey-scroller {\n    overflow: auto;\n}\n\n/********** Shrinkable **********/\n\n.suey-shrinkable {\n    background-color: transparent;\n    border: solid var(--border-small) rgba(var(--shadow), 0.25);\n    border-radius: var(--radius-large);\n    margin: var(--pad-micro);\n    box-shadow: inset 0 0 var(--pad-small) 0 rgba(var(--midlight), 0.5); /* inner-glow */\n    overflow: visible;\n}\n.suey-shrinkable.suey-borderless-panel {\n    border: solid var(--border-small) transparent;\n    margin-bottom: 0;\n    box-shadow: none;\n}\n.suey-shrinkable.suey-borderless-panel.suey-expanded {\n    border-bottom: none;\n}\n\n/* Shrinkable Title Div */\n.suey-shrink-title {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: 100%;\n    min-height: calc(var(--row-height));\n    overflow: hidden;\n\n    cursor: default;\n    color: rgba(var(--text-light), 1.0);\n    background-color: rgba(var(--icon), 0.35);\n\n    box-shadow: inset 0 0 var(--pad-small) 0 rgba(var(--midlight), 0.5); /* inner-glow */\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n\n    border-bottom: solid var(--border-micro) transparent;\n    border-top: solid var(--border-micro) transparent;\n    border-top-left-radius: var(--radius-small);\n    border-top-right-radius: var(--radius-small);\n    padding: 0 var(--pad-medium); /* vertical horizontal */\n}\n.suey-shrink-title:hover {\n    color: rgba(var(--highlight), 1.0)\n}\n.suey-shrinkable:not(.suey-expanded) .suey-shrink-title {\n    border-radius: var(--radius-small);\n}\n.suey-shrinkable.suey-borderless-panel .suey-shrink-title {\n    outline: solid var(--border-small) rgba(var(--shadow), 0.25);\n    border-radius: var(--radius-small);\n}\n\n/* Title Icon */\n.suey-shrink-icon > * {\n    filter: var(--drop-shadow);\n}\n.suey-shrink-icon {\n    flex-grow: 0;\n    flex-shrink: 0;\n\n    position: relative;\n    display: flex;\n    margin: 0.15em;\n    height: calc(var(--arrow-size) * 3.5);\n    min-height: calc(var(--arrow-size) * 3.5);\n}\n.suey-shrink-icon.suey-has-icon {\n    width: calc(var(--arrow-size) * 3.5);\n    min-width: calc(var(--arrow-size) * 3.5);\n}\n\n/* Title Text */\n.suey-shrink-text {\n    flex-grow: 1;\n    flex-shrink: 2;\n\n    overflow: hidden;\n    text-align: left;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n\n    padding-left: 0.2em;\n}\n\n/* Title Arrow */\n.suey-shrink-arrow {\n    flex-grow: 0;\n    flex-shrink: 1;\n\n    position: relative;\n    content: '';\n    margin: 0 0.35em; /* vertical horizontal */\n    width: 0;\n    height: 0;\n    transform: translateX(25%);\n    z-index: 101; /* Shrink Arrow */\n    border: var(--arrow-size) solid transparent;\n    border-color: transparent transparent transparent rgba(var(--text));\n    transition: transform var(--menu-timing);\n}\n.suey-shrink-arrow-clicker {\n    position: absolute;\n    content: '';\n    width: 1.7em;\n    height: 1.7em;\n    left: calc(1.7em * -0.5);\n    top: calc(1.7em * -0.5);\n    cursor: pointer;\n}\n.suey-shrinkable.suey-expanded .suey-shrink-title .suey-shrink-arrow {\n    transform: rotate(90deg) translateX(25%);\n}\n.suey-shrink-title:hover .suey-shrink-arrow {\n    border-color: transparent transparent transparent rgba(var(--highlight));\n}\n\n/* Shrinkable Body Div */\n.suey-shrink-body {\n    position: relative;\n    display: flex;\n    flex-wrap: wrap;\n    border-bottom-left-radius: var(--radius-small);\n    border-bottom-right-radius: var(--radius-small);\n    padding: var(--pad-small) 0;\n    overflow: hidden;\n    pointer-events: auto;\n}\n.suey-shrinkable.suey-borderless-panel .suey-shrink-body {\n    padding-bottom: 0;\n}\n.suey-shrinkable:not(.suey-expanded) .suey-shrink-body {\n    pointer-events: none;\n    display: none;\n}\n.suey-shrinkable.suey-expanded:not(.suey-borderless-panel) .suey-shrink-body {\n    border-top: solid var(--border-small) rgba(var(--shadow), 0.25);\n}\n\n/********** Titled **********/\n\n.suey-titled {\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n    display: flex; /* needed for scroll bars to appear on proper layer */\n    flex-direction: column;\n}\n\n.suey-title-arrow {\n    position: absolute;\n    content: '';\n    font-size: var(--font-size);\n    pointer-events: none;\n    width: 0;\n    height: 0;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n    transform: translateY(-25%) scale(1.0, -1.0);\n    border: 0.5em solid transparent;\n    border-color: rgba(var(--text)) transparent transparent transparent;\n    transition: transform var(--menu-timing);\n}\n.suey-title-arrow-click {\n    position: absolute;\n    cursor: pointer;\n    content: '';\n    pointer-events: all;\n    width: 2em;\n    height: 2em;\n    top: 0;\n    bottom: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    right: 0.25em;\n    z-index: 101; /* Title Arrow */\n}\n.suey-title-arrow-click:hover .suey-title-arrow {\n    border-color: rgba(var(--highlight)) transparent transparent transparent;\n}\n.suey-titled.suey-expanded .suey-tab-title .suey-title-arrow {\n    transform: translateY(25%);\n}\n\n/* Title Bar Class for top of Title Panel */\n.suey-tab-title {\n    --font-size-increase:   1.3;\n\n    position: relative;\n    display: flex;\n    flex-shrink: 0; /* don't allow title to shrink */\n    color: rgba(var(--text-light), 1);\n    background-color: transparent;\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.5), rgba(var(--icon-dark), 0.5));\n    border: 0;\n    border-radius: calc(var(--radius-small) / var(--font-size-increase));\n    outline: solid calc(var(--border-small) / var(--font-size-increase)) rgba(var(--shadow), 0.25);\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n    text-shadow: calc(var(--minus) * var(--font-size-increase)) calc(var(--pixel) * var(--font-size-increase)) rgba(var(--shadow), 0.5);\n    text-align: center;\n    overflow: hidden;\n\n    font-size: calc(100% * var(--font-size-increase));\n    margin: var(--pad-x-small);\n    justify-content: center;\n    align-items: center;\n    min-height: 1.867em;\n}\n.suey-tab-title-text {\n    user-select: none;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    font-size: 100%;\n}\n.suey-tab-title-text::selection {\n    color: rgba(var(--icon), 1);\n    background-color: rgba(var(--blacklight), 1);\n}\n";
var stylesheet$8="/********** Panel (simple / fancy) **********/\n\n.suey-panel {\n    pointer-events: auto;\n    position: relative;\n    overflow: visible;\n    outline: none; /* for macos */\n    z-index: 0; /* Panel */\n}\n\n.suey-panel-simple {\n    --edge-thickness:       0.35714em;      /* 5px @ font size 1.4em (14px) */\n\n    background-color: rgba(var(--background-light), var(--panel-transparency));\n    border: var(--border-small) solid rgb(var(--icon));\n    border-radius: var(--radius-large);\n    margin: calc(var(--edge-thickness) + var(--pad-x-small));\n}\n\n.suey-panel-fancy-outer {\n    --edge-thickness:       0.35714em;      /* 5px @ font size 1.4em (14px) */\n    --border-radius-outer:  0.71429em;      /* 10px @ font size 1.4em (14px) */\n\n    height: 100%;\n\n    background-color: rgba(var(--background-light), calc(var(--panel-transparency) * 0.5));\n    border-radius: var(--border-radius-outer);\n    box-shadow: 0px 0px 5px 1px rgba(var(--shadow), 0.25);\n    padding: var(--edge-thickness); /* outside of border padding */\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n}\n\n.suey-panel-fancy-border {\n    height: 100%;\n\n    background-color: rgba(var(--background-light), var(--panel-transparency));\n    border: var(--border-small) solid rgb(var(--icon));\n    border-radius: var(--radius-large);\n    padding: var(--pad-x-small);\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n}\n\n.suey-window .suey-panel-fancy-border {\n    border: var(--border-small) solid rgb(var(--button-light));\n}\n.suey-window.suey-active-window .suey-panel-fancy-border {\n    border: var(--border-small) solid rgb(var(--icon));\n}\n\n.suey-panel-fancy-inside {\n    height: 100%;\n    width: 100%;\n    background-color: rgba(var(--icon-light), calc(var(--panel-transparency) * 0.05));\n    border-radius: var(--radius-small);\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n}\n\n/********** Scroller ********/\n\n.suey-scroller {\n    overflow: auto;\n}\n\n/********** Shrinkable **********/\n\n.suey-shrinkable {\n    background-color: transparent;\n    border: solid var(--border-small) rgba(var(--shadow), 0.25);\n    border-radius: var(--radius-large);\n    margin: var(--pad-micro);\n    box-shadow: inset 0 0 var(--pad-small) 0 rgba(var(--midlight), 0.5); /* inner-glow */\n    overflow: visible;\n}\n.suey-shrinkable.suey-borderless-panel {\n    border: solid var(--border-small) transparent;\n    margin-bottom: 0;\n    box-shadow: none;\n}\n.suey-shrinkable.suey-borderless-panel.suey-expanded {\n    border-bottom: none;\n}\n\n/* Shrinkable Title Div */\n.suey-shrink-title {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: 100%;\n    min-height: calc(var(--row-height));\n    overflow: hidden;\n\n    cursor: default;\n    color: rgba(var(--text-light), 1.0);\n    background-color: rgba(var(--icon), 0.35);\n\n    box-shadow: inset 0 0 var(--pad-small) 0 rgba(var(--midlight), 0.5); /* inner-glow */\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n\n    border-bottom: solid var(--border-micro) transparent;\n    border-top: solid var(--border-micro) transparent;\n    border-top-left-radius: var(--radius-small);\n    border-top-right-radius: var(--radius-small);\n    padding: 0 var(--pad-medium); /* vertical horizontal */\n}\n.suey-shrink-title:hover {\n    color: rgba(var(--highlight), 1.0)\n}\n.suey-shrinkable:not(.suey-expanded) .suey-shrink-title {\n    border-radius: var(--radius-small);\n}\n.suey-shrinkable.suey-borderless-panel .suey-shrink-title {\n    outline: solid var(--border-small) rgba(var(--shadow), 0.25);\n    border-radius: var(--radius-small);\n}\n\n/* Title Icon */\n.suey-shrink-icon > * {\n    filter: var(--drop-shadow);\n}\n.suey-shrink-icon {\n    flex-grow: 0;\n    flex-shrink: 0;\n\n    position: relative;\n    display: flex;\n    margin: 0.15em;\n    height: calc(var(--arrow-size) * 3.5);\n    min-height: calc(var(--arrow-size) * 3.5);\n}\n.suey-shrink-icon.suey-has-icon {\n    width: calc(var(--arrow-size) * 3.5);\n    min-width: calc(var(--arrow-size) * 3.5);\n}\n\n/* Title Text */\n.suey-shrink-text {\n    flex-grow: 1;\n    flex-shrink: 2;\n\n    overflow: hidden;\n    text-align: left;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n\n    padding-left: 0.2em;\n}\n\n/* Title Arrow */\n.suey-shrink-arrow {\n    flex-grow: 0;\n    flex-shrink: 1;\n\n    position: relative;\n    content: '';\n    margin: 0 0.35em; /* vertical horizontal */\n    width: 0;\n    height: 0;\n    transform: translateX(25%);\n    z-index: 101; /* Shrink Arrow */\n    border: var(--arrow-size) solid transparent;\n    border-color: transparent transparent transparent rgba(var(--text));\n    transition: transform var(--menu-timing);\n}\n.suey-shrink-arrow-clicker {\n    position: absolute;\n    content: '';\n    width: 1.7em;\n    height: 1.7em;\n    left: calc(1.7em * -0.5);\n    top: calc(1.7em * -0.5);\n    cursor: pointer;\n}\n.suey-shrinkable.suey-expanded .suey-shrink-title .suey-shrink-arrow {\n    transform: rotate(90deg) translateX(25%);\n}\n.suey-shrink-title:hover .suey-shrink-arrow {\n    border-color: transparent transparent transparent rgba(var(--highlight));\n}\n\n/* Shrinkable Body Div */\n.suey-shrink-body {\n    position: relative;\n    display: flex;\n    flex-wrap: wrap;\n    border-bottom-left-radius: var(--radius-small);\n    border-bottom-right-radius: var(--radius-small);\n    padding: var(--pad-small) 0;\n    overflow: hidden;\n    pointer-events: auto;\n}\n.suey-shrinkable.suey-borderless-panel .suey-shrink-body {\n    padding-bottom: 0;\n}\n.suey-shrinkable:not(.suey-expanded) .suey-shrink-body {\n    pointer-events: none;\n    display: none;\n}\n.suey-shrinkable.suey-expanded:not(.suey-borderless-panel) .suey-shrink-body {\n    border-top: solid var(--border-small) rgba(var(--shadow), 0.25);\n}\n\n/********** Titled **********/\n\n.suey-titled {\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n    display: flex; /* needed for scroll bars to appear on proper layer */\n    flex-direction: column;\n}\n\n.suey-title-arrow {\n    position: absolute;\n    content: '';\n    font-size: var(--font-size);\n    pointer-events: none;\n    width: 0;\n    height: 0;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    margin: auto;\n    transform: translateY(-25%) scale(1.0, -1.0);\n    border: 0.5em solid transparent;\n    border-color: rgba(var(--text)) transparent transparent transparent;\n    transition: transform var(--menu-timing);\n}\n.suey-title-arrow-click {\n    position: absolute;\n    cursor: pointer;\n    content: '';\n    pointer-events: all;\n    width: 2em;\n    height: 2em;\n    top: 0;\n    bottom: 0;\n    margin-top: auto;\n    margin-bottom: auto;\n    right: 0.25em;\n    z-index: 101; /* Title Arrow */\n}\n.suey-title-arrow-click:hover .suey-title-arrow {\n    border-color: rgba(var(--highlight)) transparent transparent transparent;\n}\n.suey-titled.suey-expanded .suey-tab-title .suey-title-arrow {\n    transform: translateY(25%);\n}\n\n/* Title Bar Class for top of Title Panel */\n.suey-tab-title {\n    --font-size-increase:   1.3;\n\n    position: relative;\n    display: flex;\n    flex-shrink: 0; /* don't allow title to shrink */\n    color: rgba(var(--text-light), 1);\n    background-color: transparent;\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.5), rgba(var(--icon-dark), 0.5));\n    border: 0;\n    border-radius: calc(var(--radius-small) / var(--font-size-increase));\n    outline: solid calc(var(--border-small) / var(--font-size-increase)) rgba(var(--shadow), 0.25);\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n    text-shadow: calc(var(--minus) * var(--font-size-increase)) calc(var(--pixel) * var(--font-size-increase)) rgba(var(--shadow), 0.5);\n    text-align: center;\n    overflow: hidden;\n\n    font-size: calc(100% * var(--font-size-increase));\n    margin: var(--pad-x-small);\n    justify-content: center;\n    align-items: center;\n    min-height: 1.867em;\n}\n.suey-tab-title-text {\n    user-select: none;\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    font-size: 100%;\n}\n.suey-tab-title-text::selection {\n    color: rgba(var(--icon), 1);\n    background-color: rgba(var(--blacklight), 1);\n}\n";
styleInject(css_248z$8);

var css_248z$7 = "/***** Question *****/\n\n.suey-question {\n    position: fixed;\n    display: flex;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 100001; /* question */\n}\n\n.suey-screen-blackout {\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    background-color: rgba(var(--background-dark), 0.75);\n    z-index: 100000; /* blackout */\n}\n\n.suey-question-left {\n    user-select: none;\n    position: relative;\n    width: 5em;\n    min-height: 5em;\n    margin: 1.5em;\n}\n\n.suey-question-right {\n    position: relative;\n    flex-direction: column;\n    display: flex;\n    min-width: 16em;\n    min-height: 5em;\n}\n\n.suey-question-top {\n    position: relative;\n    display: flex;\n    flex: 1 1 auto;\n    min-height: 3em;\n    margin-top: 0.5em;\n    text-align: center;\n}\n\n.suey-question-bottom {\n    position: relative;\n    display: flex;\n    height: 2em;\n    margin: 0.5em;\n}\n";
var stylesheet$7="/***** Question *****/\n\n.suey-question {\n    position: fixed;\n    display: flex;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 100001; /* question */\n}\n\n.suey-screen-blackout {\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    background-color: rgba(var(--background-dark), 0.75);\n    z-index: 100000; /* blackout */\n}\n\n.suey-question-left {\n    user-select: none;\n    position: relative;\n    width: 5em;\n    min-height: 5em;\n    margin: 1.5em;\n}\n\n.suey-question-right {\n    position: relative;\n    flex-direction: column;\n    display: flex;\n    min-width: 16em;\n    min-height: 5em;\n}\n\n.suey-question-top {\n    position: relative;\n    display: flex;\n    flex: 1 1 auto;\n    min-height: 3em;\n    margin-top: 0.5em;\n    text-align: center;\n}\n\n.suey-question-bottom {\n    position: relative;\n    display: flex;\n    height: 2em;\n    margin: 0.5em;\n}\n";
styleInject(css_248z$7);

var css_248z$6 = "/********** Main Window **********/\n\n.suey-main-window {\n    user-select: none;\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n}\n\n.suey-window-holder {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    pointer-events: none;\n}\n\n/********** Abstract Dock **********/\n\n.suey-dock {\n    position: relative;\n}\n\n/********** Docker **********/\n\n.suey-docker {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    min-width: 8em;\n    min-height: 8em;\n    max-width: 100%;\n    max-height: 100%;\n    pointer-events: none;\n}\n\n.suey-docker.suey-docker-primary {\n    width: 100vw;\n    height: 100vh;\n    top: 0;\n    left: 0;\n    overflow: visible;\n}\n\n.suey-docker-vertical {\n    height: 100%;\n}\n\n.suey-docker-horizontal {\n    width: 100%;\n}\n\n.suey-dock-drag .suey-docker {\n    pointer-events: all !important;\n}\n\n/***** Collapsed Docks */\n\n.suey-docker.suey-collapsed {\n    min-width: calc(var(--tab-size) * 1) !important;\n    min-height: calc(var(--tab-size) * 1) !important;\n}\n\n.suey-collapsed .suey-corner-button {\n    display: none !important;\n}\n\n.suey-collapsed > .suey-tabbed .suey-panel-simple,\n.suey-collapsed > .suey-tabbed .suey-panel-fancy-outer,\n.suey-collapsed > .suey-tabbed .suey-panel-fancy-border,\n.suey-collapsed > .suey-tabbed .suey-panel-fancy-inside {\n    background-color: transparent !important;\n    border-color: transparent !important;\n    outline: none !important;\n    box-shadow: none !important;\n}\n\n.suey-collapsed > .suey-tabbed .suey-tab-floaters * {\n    opacity: 0 !important;\n    user-select: none !important;\n    pointer-events: none !important;\n}\n\n.suey-collapsed > .suey-tabbed .suey-tab-buttons.suey-left-side { top: 0; right: 0; left: auto; }\n.suey-collapsed > .suey-tabbed .suey-tab-buttons.suey-right-side { top: 0; left: 0; right: auto; }\n.suey-collapsed > .suey-tabbed .suey-tab-buttons.suey-top-side { left: 0; bottom: 0; top: auto; }\n.suey-collapsed > .suey-tabbed .suey-tab-buttons.suey-bottom-side { left: 0; top: 0; bottom: auto; }\n.suey-collapsed > .suey-tabbed .suey-tab-button {\n    margin: 0 !important;\n}\n\n.suey-collapsed .suey-tabbed .suey-resizer {\n    pointer-events: none !important;\n    display: none !important;\n}\n\n/***** Dock Locations */\n\n.suey-dock-locations {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.suey-dock-location {\n    --size: 2em;\n    position: absolute;\n    opacity: 0.0;\n}\n.suey-dock-left   { left:  0; top:    0; width:  20%; height: 100%; }\n.suey-dock-right  { right: 0; top:    0; width:  20%; height: 100%; }\n.suey-dock-top    { left:  0; top:    0; width: 100%; height:  25%; }\n.suey-dock-bottom { left:  0; bottom: 0; width: 100%; height:  25%; }\n.suey-dock-center { left: 20%; top: 20%; width:  60%; height:  60%; }\n\n.suey-dock-middle-vertical   { left: var(--size); top:   0; height: 100%; width:  calc(100% - (var(--size) * 2)); }\n.suey-dock-middle-horizontal { left:   0; top: var(--size); width:  100%; height: calc(100% - (var(--size) * 2)); }\n.suey-dock-split-left   { left:  0; top:    0; width:  var(--size); height: 100%; }\n.suey-dock-split-right  { right: 0; top:    0; width:  var(--size); height: 100%; }\n.suey-dock-split-top    { left:  0; top:    0; width: 100%; height:  var(--size); }\n.suey-dock-split-bottom { left:  0; bottom: 0; width: 100%; height:  var(--size); }\n\n.suey-dock-location.suey-dock-drop {\n    background-color: transparent;\n    opacity: 1.0;\n}\n.suey-dock-location.suey-dock-drop:not(.suey-dock-self)::before {\n    --shrink: 0.57143em;\n    content: '';\n    position: absolute;\n    left: var(--shrink);\n    right: var(--shrink);\n    top: var(--shrink);\n    bottom: var(--shrink);\n    background-color: rgba(var(--background-light), var(--panel-transparency));\n    border: var(--border-small) solid rgb(var(--complement));\n    border-radius: var(--radius-large);\n    outline: var(--radius-large) solid rgba(var(--background-light), calc(var(--panel-transparency) * 0.5));\n}\n\n.suey-docker.suey-dock-self .suey-panel-simple,\n.suey-docker.suey-dock-self .suey-panel-fancy-border {\n    border: var(--border-small) solid rgb(var(--complement)) !important;\n}\n\n/********** Floater **********/\n\n.suey-floater {\n    display: flex; /* needed for scroll bars to appear on proper layer */\n    flex-direction: column;\n    pointer-events: auto;\n    height: 100%;\n    width: 100%;\n    overflow: auto;\n}\n\n/********** Tabbed **********/\n\n.suey-tabbed {\n    pointer-events: all;\n    max-height: 100%;\n    padding: var(--pad-small);\n}\n\n/***** TabPanels */\n\n/* Child of Tabbed that holds multiple 'Floater' */\n.suey-tab-floaters {\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n}\n\n/***** TabButtons */\n\n/* Child of Tabbed that holds multiple 'TabButton' */\n.suey-tab-buttons {\n    pointer-events: none;\n    position: absolute;\n    display: flex;\n    z-index: 101; /* Tabs */\n    min-width: var(--tab-size);\n    min-height: var(--tab-size);\n    margin: 0;\n}\n\n.suey-dock-drag .suey-tab-buttons {\n    pointer-events: all;\n}\n\n.suey-tab-buttons.suey-left-side,\n.suey-tab-buttons.suey-right-side {\n    flex-direction: column;\n    top: 1em;\n}\n\n.suey-tab-buttons.suey-top-side,\n.suey-tab-buttons.suey-bottom-side {\n    flex-direction: row;\n    left: 1em;\n}\n\n.suey-tab-buttons.suey-top-side { top: calc((var(--tab-size) / -2.0) + 0.52em); }\n.suey-tab-buttons.suey-bottom-side { bottom: calc((var(--tab-size) / -2.0) + 0.52em); }\n\n.suey-tab-buttons.suey-left-side { left: calc((var(--tab-size) / -2.0) + 0.52em); }\n.suey-tab-buttons.suey-right-side { right: calc((var(--tab-size) / -2.0) + 0.52em); }\n\n/***** TabButton *****/\n\n.suey-tab-button {\n    pointer-events: all;\n    width: var(--tab-size);\n    height: var(--tab-size);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    color: rgba(var(--text), 1.0);\n    background-color: transparent;\n    border: none;\n    border-radius: var(--tab-size);\n    outline: none;\n    margin: var(--pad-x-small);\n    transform: scale(70%);\n    transition: margin var(--tab-timing) ease-in-out, transform var(--tab-timing) ease-in-out;\n}\n\n.suey-window .suey-tab-button {\n    transition: 0s;\n}\n\n.suey-tab-buttons.suey-top-side .suey-tab-button:not(.suey-selected),\n.suey-tab-buttons.suey-bottom-side .suey-tab-button:not(.suey-selected) {\n    margin-left: calc(-1 * var(--pad-x-small));\n    margin-right: calc(-1 * var(--pad-x-small));\n}\n\n.suey-tab-buttons.suey-left-side .suey-tab-button:not(.suey-selected),\n.suey-tab-buttons.suey-right-side .suey-tab-button:not(.suey-selected) {\n    margin-top: calc(-1 * var(--pad-x-small));\n    margin-bottom: calc(-1 * var(--pad-x-small));\n}\n\n.suey-drag-tab-button {\n    position: absolute;\n    z-index: 10000;\n    pointer-events: none;\n    opacity: 0.8;\n    transform: scale(100%);\n}\n.suey-drag-tab-button .suey-tab-icon-border {\n    border-width: var(--border-small);\n}\n\n:not(.suey-collapsed) > .suey-dock .suey-tab-button.suey-selected {\n    color: rgba(var(--highlight), 1.0);\n    margin-top: var(--pad-x-small);\n    margin-bottom: var(--pad-x-small);\n    transform: scale(100%);\n}\n\n/* Tab Image */\n.suey-tab-button .suey-vector-box {\n    position: absolute;\n    border: none;\n    border-radius: var(--tab-size);\n    outline: none;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    filter: contrast(75%) grayscale(100%) brightness(75%);\n}\n\n:not(.suey-collapsed) > .suey-dock .suey-tab-button.suey-selected .suey-vector-box {\n    filter: none;\n}\n\n.suey-tab-button:hover .suey-vector-box,\n.suey-tab-button:active .suey-vector-box {\n    filter: brightness(120%) !important;\n}\n\n.suey-tab-button:active .suey-vector-box .suey-image {\n    transform: translate(0, var(--pixel));\n}\n\n/* Tab Image Border / Shadow */\n.suey-tab-icon-border {\n    cursor: pointer;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border: var(--pad-small) solid rgba(var(--icon));\n    border-radius: calc(var(--tab-size) * 0.7);\n    outline: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transform: scale(1.05);\n}\n\n.suey-tab-button.suey-drop-target .suey-tab-icon-border {\n    border-color: rgba(var(--complement)) !important;\n}\n\n.suey-tab-button:hover .suey-tab-icon-border {\n    box-shadow:\n        inset 0 var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.50),\n        inset 0 var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.35);\n}\n\n.suey-tab-button:active .suey-tab-icon-border {\n    box-shadow:\n        inset 0 var(--pixel) var(--pixel) var(--pixel) rgba(var(--black), 0.35);\n}\n\n:not(.suey-collapsed) > .suey-tabbed .suey-tab-button.suey-selected .suey-tab-icon-border {\n    border: 0.15em solid rgb(var(--icon));\n}\n\n/********** Window **********/\n\n.suey-window {\n    --window-z-index: 200;\n\n    position: absolute;\n    padding: var(--pad-small);\n    opacity: calc(90% + (10% * var(--panel-transparency)));\n    z-index: var(--window-z-index); /* Window */\n}\n\n.suey-window.suey-drop-target .suey-panel-simple,\n.suey-window.suey-drop-target .suey-panel-fancy-border {\n    border: var(--border-small) solid rgb(var(--complement)) !important;\n}\n\n.suey-window:not(.suey-active-window) div::-webkit-scrollbar-thumb:horizontal {\n    background: linear-gradient(to left, rgba(var(--button-light), 1), rgba(var(--button-dark), 1));\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n.suey-window:not(.suey-active-window) div::-webkit-scrollbar-thumb:vertical {\n    background: linear-gradient(to bottom, rgba(var(--button-light), 1), rgba(var(--button-dark), 1));\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n\n.suey-panel-button.suey-title-bar {\n    --title-width: 0;\n    color: rgba(var(--highlight), 0.5);\n    border: var(--border-small) solid rgb(var(--button-light));\n    border-radius: var(--radius-large);\n    background-color: rgba(var(--background-dark), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--background-light), 0.5), rgba(var(--background-dark), 0.5));\n    box-shadow: none;\n    text-shadow: none;\n    text-align: center;\n    left: 0;\n    right: 0;\n    min-width: 6em;\n    min-height: 1.6em;\n    margin-left: auto;\n    margin-right: auto;\n    overflow: visible;\n}\n\n.suey-active-window .suey-panel-button.suey-title-bar {\n    color: rgba(var(--highlight), 1);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.5), rgba(var(--icon), 0.5));\n    border: var(--border-small) solid rgb(var(--icon));\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n}\n\n/* Window Tab Buttons */\n\n.suey-tab-buttons.suey-window-side {\n    flex-direction: row;\n    top: calc((var(--tab-size) / -2.0) + 0.4em);\n}\n.suey-tab-buttons.suey-window-side .suey-tab-icon-border {\n    border: var(--border-small) solid rgba(var(--icon));\n}\n.suey-window-moving .suey-tab-buttons.suey-window-side {\n    transition: transform 0.15s;\n}\n.suey-window-moving .suey-tab-buttons.suey-window-side .suey-tab-icon-border {\n    transition: border 0.15s;\n}\n\n.suey-shrink-tab-button .suey-tab-buttons.suey-window-side {\n    top: calc((var(--tab-size) / -2.0) + 0.5em); /* 42857em);*/\n    transform: scale(65%);\n}\n.suey-shrink-tab-button .suey-tab-buttons.suey-window-side .suey-tab-icon-border {\n    border: 0.24em solid rgba(var(--icon));\n}\n\n.suey-panel-button.suey-title-bar .suey-tab-buttons {\n    left: 110%;\n    margin-left: 0.5em;\n}\n\n.suey-window:not(.suey-active-window) .suey-tab-icon-border {\n    border-color: rgba(var(--button-light)) !important;\n}\n\n/* Window Floaters */\n.suey-window .suey-panel-fancy-outer,\n.suey-window .suey-panel-fancy-border,\n.suey-window .suey-panel-fancy-inside,\n.suey-window .suey-tab-floaters,\n.suey-window .suey-floater,\n.suey-window .suey-titled {\n    overflow: visible;\n}\n\n.suey-window .suey-floater {\n    z-index: 101; /* window floater */\n}\n\n.suey-window .suey-tab-floaters {\n    margin-top: 1em;\n    height: calc(100% - 1em);\n}\n\n/* Window Tab Title Buttons */\n.suey-window .suey-tab-title {\n    pointer-events: none;\n    position: absolute;\n    top: -1.8em;\n    left: 0;\n    right: 0;\n    width: 75%;\n    margin: auto;\n    min-height: 1.9em;\n    background: transparent;\n    background-image: none;\n    box-shadow: none;\n    outline: none;\n    color: transparent;\n    text-shadow: none;\n    overflow: visible;\n}\n.suey-window .suey-tab-title .suey-borderless-button {\n    pointer-events: all;\n    position: relative;\n    pointer-events: all;\n    background: rgb(var(--button-dark)) !important;\n    border: solid var(--border-small) rgb(var(--icon));\n    overflow: visible;\n}\n.suey-window:not(.suey-active-window) .suey-tab-title .suey-borderless-button {\n    border: solid var(--border-small) rgb(var(--button-light));\n}\n";
var stylesheet$6="/********** Main Window **********/\n\n.suey-main-window {\n    user-select: none;\n    position: fixed;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n}\n\n.suey-window-holder {\n    position: absolute;\n    left: 0;\n    right: 0;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    pointer-events: none;\n}\n\n/********** Abstract Dock **********/\n\n.suey-dock {\n    position: relative;\n}\n\n/********** Docker **********/\n\n.suey-docker {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    min-width: 8em;\n    min-height: 8em;\n    max-width: 100%;\n    max-height: 100%;\n    pointer-events: none;\n}\n\n.suey-docker.suey-docker-primary {\n    width: 100vw;\n    height: 100vh;\n    top: 0;\n    left: 0;\n    overflow: visible;\n}\n\n.suey-docker-vertical {\n    height: 100%;\n}\n\n.suey-docker-horizontal {\n    width: 100%;\n}\n\n.suey-dock-drag .suey-docker {\n    pointer-events: all !important;\n}\n\n/***** Collapsed Docks */\n\n.suey-docker.suey-collapsed {\n    min-width: calc(var(--tab-size) * 1) !important;\n    min-height: calc(var(--tab-size) * 1) !important;\n}\n\n.suey-collapsed .suey-corner-button {\n    display: none !important;\n}\n\n.suey-collapsed > .suey-tabbed .suey-panel-simple,\n.suey-collapsed > .suey-tabbed .suey-panel-fancy-outer,\n.suey-collapsed > .suey-tabbed .suey-panel-fancy-border,\n.suey-collapsed > .suey-tabbed .suey-panel-fancy-inside {\n    background-color: transparent !important;\n    border-color: transparent !important;\n    outline: none !important;\n    box-shadow: none !important;\n}\n\n.suey-collapsed > .suey-tabbed .suey-tab-floaters * {\n    opacity: 0 !important;\n    user-select: none !important;\n    pointer-events: none !important;\n}\n\n.suey-collapsed > .suey-tabbed .suey-tab-buttons.suey-left-side { top: 0; right: 0; left: auto; }\n.suey-collapsed > .suey-tabbed .suey-tab-buttons.suey-right-side { top: 0; left: 0; right: auto; }\n.suey-collapsed > .suey-tabbed .suey-tab-buttons.suey-top-side { left: 0; bottom: 0; top: auto; }\n.suey-collapsed > .suey-tabbed .suey-tab-buttons.suey-bottom-side { left: 0; top: 0; bottom: auto; }\n.suey-collapsed > .suey-tabbed .suey-tab-button {\n    margin: 0 !important;\n}\n\n.suey-collapsed .suey-tabbed .suey-resizer {\n    pointer-events: none !important;\n    display: none !important;\n}\n\n/***** Dock Locations */\n\n.suey-dock-locations {\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.suey-dock-location {\n    --size: 2em;\n    position: absolute;\n    opacity: 0.0;\n}\n.suey-dock-left   { left:  0; top:    0; width:  20%; height: 100%; }\n.suey-dock-right  { right: 0; top:    0; width:  20%; height: 100%; }\n.suey-dock-top    { left:  0; top:    0; width: 100%; height:  25%; }\n.suey-dock-bottom { left:  0; bottom: 0; width: 100%; height:  25%; }\n.suey-dock-center { left: 20%; top: 20%; width:  60%; height:  60%; }\n\n.suey-dock-middle-vertical   { left: var(--size); top:   0; height: 100%; width:  calc(100% - (var(--size) * 2)); }\n.suey-dock-middle-horizontal { left:   0; top: var(--size); width:  100%; height: calc(100% - (var(--size) * 2)); }\n.suey-dock-split-left   { left:  0; top:    0; width:  var(--size); height: 100%; }\n.suey-dock-split-right  { right: 0; top:    0; width:  var(--size); height: 100%; }\n.suey-dock-split-top    { left:  0; top:    0; width: 100%; height:  var(--size); }\n.suey-dock-split-bottom { left:  0; bottom: 0; width: 100%; height:  var(--size); }\n\n.suey-dock-location.suey-dock-drop {\n    background-color: transparent;\n    opacity: 1.0;\n}\n.suey-dock-location.suey-dock-drop:not(.suey-dock-self)::before {\n    --shrink: 0.57143em;\n    content: '';\n    position: absolute;\n    left: var(--shrink);\n    right: var(--shrink);\n    top: var(--shrink);\n    bottom: var(--shrink);\n    background-color: rgba(var(--background-light), var(--panel-transparency));\n    border: var(--border-small) solid rgb(var(--complement));\n    border-radius: var(--radius-large);\n    outline: var(--radius-large) solid rgba(var(--background-light), calc(var(--panel-transparency) * 0.5));\n}\n\n.suey-docker.suey-dock-self .suey-panel-simple,\n.suey-docker.suey-dock-self .suey-panel-fancy-border {\n    border: var(--border-small) solid rgb(var(--complement)) !important;\n}\n\n/********** Floater **********/\n\n.suey-floater {\n    display: flex; /* needed for scroll bars to appear on proper layer */\n    flex-direction: column;\n    pointer-events: auto;\n    height: 100%;\n    width: 100%;\n    overflow: auto;\n}\n\n/********** Tabbed **********/\n\n.suey-tabbed {\n    pointer-events: all;\n    max-height: 100%;\n    padding: var(--pad-small);\n}\n\n/***** TabPanels */\n\n/* Child of Tabbed that holds multiple 'Floater' */\n.suey-tab-floaters {\n    height: 100%;\n    width: 100%;\n    overflow: hidden;\n\n    /* Need for scroll bars to appear on proper layer */\n    display: flex;\n    flex-direction: column;\n}\n\n/***** TabButtons */\n\n/* Child of Tabbed that holds multiple 'TabButton' */\n.suey-tab-buttons {\n    pointer-events: none;\n    position: absolute;\n    display: flex;\n    z-index: 101; /* Tabs */\n    min-width: var(--tab-size);\n    min-height: var(--tab-size);\n    margin: 0;\n}\n\n.suey-dock-drag .suey-tab-buttons {\n    pointer-events: all;\n}\n\n.suey-tab-buttons.suey-left-side,\n.suey-tab-buttons.suey-right-side {\n    flex-direction: column;\n    top: 1em;\n}\n\n.suey-tab-buttons.suey-top-side,\n.suey-tab-buttons.suey-bottom-side {\n    flex-direction: row;\n    left: 1em;\n}\n\n.suey-tab-buttons.suey-top-side { top: calc((var(--tab-size) / -2.0) + 0.52em); }\n.suey-tab-buttons.suey-bottom-side { bottom: calc((var(--tab-size) / -2.0) + 0.52em); }\n\n.suey-tab-buttons.suey-left-side { left: calc((var(--tab-size) / -2.0) + 0.52em); }\n.suey-tab-buttons.suey-right-side { right: calc((var(--tab-size) / -2.0) + 0.52em); }\n\n/***** TabButton *****/\n\n.suey-tab-button {\n    pointer-events: all;\n    width: var(--tab-size);\n    height: var(--tab-size);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    color: rgba(var(--text), 1.0);\n    background-color: transparent;\n    border: none;\n    border-radius: var(--tab-size);\n    outline: none;\n    margin: var(--pad-x-small);\n    transform: scale(70%);\n    transition: margin var(--tab-timing) ease-in-out, transform var(--tab-timing) ease-in-out;\n}\n\n.suey-window .suey-tab-button {\n    transition: 0s;\n}\n\n.suey-tab-buttons.suey-top-side .suey-tab-button:not(.suey-selected),\n.suey-tab-buttons.suey-bottom-side .suey-tab-button:not(.suey-selected) {\n    margin-left: calc(-1 * var(--pad-x-small));\n    margin-right: calc(-1 * var(--pad-x-small));\n}\n\n.suey-tab-buttons.suey-left-side .suey-tab-button:not(.suey-selected),\n.suey-tab-buttons.suey-right-side .suey-tab-button:not(.suey-selected) {\n    margin-top: calc(-1 * var(--pad-x-small));\n    margin-bottom: calc(-1 * var(--pad-x-small));\n}\n\n.suey-drag-tab-button {\n    position: absolute;\n    z-index: 10000;\n    pointer-events: none;\n    opacity: 0.8;\n    transform: scale(100%);\n}\n.suey-drag-tab-button .suey-tab-icon-border {\n    border-width: var(--border-small);\n}\n\n:not(.suey-collapsed) > .suey-dock .suey-tab-button.suey-selected {\n    color: rgba(var(--highlight), 1.0);\n    margin-top: var(--pad-x-small);\n    margin-bottom: var(--pad-x-small);\n    transform: scale(100%);\n}\n\n/* Tab Image */\n.suey-tab-button .suey-vector-box {\n    position: absolute;\n    border: none;\n    border-radius: var(--tab-size);\n    outline: none;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n    filter: contrast(75%) grayscale(100%) brightness(75%);\n}\n\n:not(.suey-collapsed) > .suey-dock .suey-tab-button.suey-selected .suey-vector-box {\n    filter: none;\n}\n\n.suey-tab-button:hover .suey-vector-box,\n.suey-tab-button:active .suey-vector-box {\n    filter: brightness(120%) !important;\n}\n\n.suey-tab-button:active .suey-vector-box .suey-image {\n    transform: translate(0, var(--pixel));\n}\n\n/* Tab Image Border / Shadow */\n.suey-tab-icon-border {\n    cursor: pointer;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    border: var(--pad-small) solid rgba(var(--icon));\n    border-radius: calc(var(--tab-size) * 0.7);\n    outline: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    transform: scale(1.05);\n}\n\n.suey-tab-button.suey-drop-target .suey-tab-icon-border {\n    border-color: rgba(var(--complement)) !important;\n}\n\n.suey-tab-button:hover .suey-tab-icon-border {\n    box-shadow:\n        inset 0 var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.50),\n        inset 0 var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.35);\n}\n\n.suey-tab-button:active .suey-tab-icon-border {\n    box-shadow:\n        inset 0 var(--pixel) var(--pixel) var(--pixel) rgba(var(--black), 0.35);\n}\n\n:not(.suey-collapsed) > .suey-tabbed .suey-tab-button.suey-selected .suey-tab-icon-border {\n    border: 0.15em solid rgb(var(--icon));\n}\n\n/********** Window **********/\n\n.suey-window {\n    --window-z-index: 200;\n\n    position: absolute;\n    padding: var(--pad-small);\n    opacity: calc(90% + (10% * var(--panel-transparency)));\n    z-index: var(--window-z-index); /* Window */\n}\n\n.suey-window.suey-drop-target .suey-panel-simple,\n.suey-window.suey-drop-target .suey-panel-fancy-border {\n    border: var(--border-small) solid rgb(var(--complement)) !important;\n}\n\n.suey-window:not(.suey-active-window) div::-webkit-scrollbar-thumb:horizontal {\n    background: linear-gradient(to left, rgba(var(--button-light), 1), rgba(var(--button-dark), 1));\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n.suey-window:not(.suey-active-window) div::-webkit-scrollbar-thumb:vertical {\n    background: linear-gradient(to bottom, rgba(var(--button-light), 1), rgba(var(--button-dark), 1));\n    border-radius: calc(var(--scroll-size) / 2.0);\n}\n\n.suey-panel-button.suey-title-bar {\n    --title-width: 0;\n    color: rgba(var(--highlight), 0.5);\n    border: var(--border-small) solid rgb(var(--button-light));\n    border-radius: var(--radius-large);\n    background-color: rgba(var(--background-dark), 1.0);\n    background-image: linear-gradient(to bottom, rgba(var(--background-light), 0.5), rgba(var(--background-dark), 0.5));\n    box-shadow: none;\n    text-shadow: none;\n    text-align: center;\n    left: 0;\n    right: 0;\n    min-width: 6em;\n    min-height: 1.6em;\n    margin-left: auto;\n    margin-right: auto;\n    overflow: visible;\n}\n\n.suey-active-window .suey-panel-button.suey-title-bar {\n    color: rgba(var(--highlight), 1);\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.5), rgba(var(--icon), 0.5));\n    border: var(--border-small) solid rgb(var(--icon));\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n}\n\n/* Window Tab Buttons */\n\n.suey-tab-buttons.suey-window-side {\n    flex-direction: row;\n    top: calc((var(--tab-size) / -2.0) + 0.4em);\n}\n.suey-tab-buttons.suey-window-side .suey-tab-icon-border {\n    border: var(--border-small) solid rgba(var(--icon));\n}\n.suey-window-moving .suey-tab-buttons.suey-window-side {\n    transition: transform 0.15s;\n}\n.suey-window-moving .suey-tab-buttons.suey-window-side .suey-tab-icon-border {\n    transition: border 0.15s;\n}\n\n.suey-shrink-tab-button .suey-tab-buttons.suey-window-side {\n    top: calc((var(--tab-size) / -2.0) + 0.5em); /* 42857em);*/\n    transform: scale(65%);\n}\n.suey-shrink-tab-button .suey-tab-buttons.suey-window-side .suey-tab-icon-border {\n    border: 0.24em solid rgba(var(--icon));\n}\n\n.suey-panel-button.suey-title-bar .suey-tab-buttons {\n    left: 110%;\n    margin-left: 0.5em;\n}\n\n.suey-window:not(.suey-active-window) .suey-tab-icon-border {\n    border-color: rgba(var(--button-light)) !important;\n}\n\n/* Window Floaters */\n.suey-window .suey-panel-fancy-outer,\n.suey-window .suey-panel-fancy-border,\n.suey-window .suey-panel-fancy-inside,\n.suey-window .suey-tab-floaters,\n.suey-window .suey-floater,\n.suey-window .suey-titled {\n    overflow: visible;\n}\n\n.suey-window .suey-floater {\n    z-index: 101; /* window floater */\n}\n\n.suey-window .suey-tab-floaters {\n    margin-top: 1em;\n    height: calc(100% - 1em);\n}\n\n/* Window Tab Title Buttons */\n.suey-window .suey-tab-title {\n    pointer-events: none;\n    position: absolute;\n    top: -1.8em;\n    left: 0;\n    right: 0;\n    width: 75%;\n    margin: auto;\n    min-height: 1.9em;\n    background: transparent;\n    background-image: none;\n    box-shadow: none;\n    outline: none;\n    color: transparent;\n    text-shadow: none;\n    overflow: visible;\n}\n.suey-window .suey-tab-title .suey-borderless-button {\n    pointer-events: all;\n    position: relative;\n    pointer-events: all;\n    background: rgb(var(--button-dark)) !important;\n    border: solid var(--border-small) rgb(var(--icon));\n    overflow: visible;\n}\n.suey-window:not(.suey-active-window) .suey-tab-title .suey-borderless-button {\n    border: solid var(--border-small) rgb(var(--button-light));\n}\n";
styleInject(css_248z$6);

var css_248z$5 = "/********** Gooey Panel **********/\n\n.suey-gooey {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 21em;\n    z-index: 1; /* Gooey */\n}\n";
var stylesheet$5="/********** Gooey Panel **********/\n\n.suey-gooey {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 21em;\n    z-index: 1; /* Gooey */\n}\n";
styleInject(css_248z$5);

var css_248z$4 = "/********** Property List **********/\n\n.suey-property-list {\n    width: 100%;\n}\n\n/***** Property Header */\n\n.suey-property-header-title {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: 100%;\n    min-height: calc(var(--row-height));\n    overflow: hidden;\n\n    cursor: default;\n    background-color: rgba(var(--icon), 0.1); /* transparent; */\n    border-top: solid var(--border-small) rgba(var(--shadow), 0.25);\n    border-bottom: solid var(--border-small) rgba(var(--shadow), 0.25);\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n    margin: var(--pad-micro) 0;\n    padding: 0;\n    padding-left: 0.425em;\n    padding-top: var(--pad-micro);\n    padding-bottom: var(--pad-micro);\n}\n\n.suey-shrinkable.suey-borderless-panel .suey-property-header-title {\n    border-radius: var(--radius-small);\n}\n\n.suey-property-header-icon > * {\n    filter: var(--drop-shadow);\n}\n\n.suey-property-header-icon {\n    flex-grow: 0;\n    flex-shrink: 0;\n\n    position: relative;\n    display: flex;\n    margin: 0.15em;\n    height: calc(var(--arrow-size) * 3.5);\n    min-height: calc(var(--arrow-size) * 3.5);\n    width: calc(var(--arrow-size) * 3.5);\n    min-width: calc(var(--arrow-size) * 3.5);\n}\n\n.suey-property-header-text {\n    flex-grow: 1;\n    flex-shrink: 2;\n    color: rgba(var(--text-light), 1.0);\n    font-size: 100%;\n    overflow: hidden;\n    text-align: left;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    padding-left: 0.5em;\n}\n\n/***** Property Row */\n\n.suey-property-row {\n    position: relative;\n    min-height: var(--row-height);\n}\n\n.suey-property-row:hover .suey-property-left {\n    color: rgba(var(--highlight), 0.8);\n}\n\n.suey-property-row:hover .suey-property-left .suey-image {\n    filter: brightness(250%);\n}\n\n.suey-property-space {\n    flex: 0 0 auto;\n    min-width: 0.2em;\n}\n\n.suey-property-left {\n    --left-property-width: 50%;\n\n    width: var(--left-property-width) !important;\n\n    position: relative;\n    flex-shrink: 0;\n    margin: 0;\n    padding-left: var(--pad-medium);\n    height: 100%;\n    min-height: var(--row-height);\n    text-align: left;\n    text-transform: capitalize;\n}\n.suey-left-tab-spacing {\n    padding-left: 0.85em;\n}\n\n.suey-property-right {\n    --right-property-width: 50%;\n\n    width: calc(var(--right-property-width) - var(--pad-small)) !important;\n\n    flex-shrink: 0;\n    margin: auto;\n    margin-right: var(--pad-small) !important;\n    justify-content: left;\n    text-align: left;\n    height: 100%;\n    min-height: var(--row-height);\n}\n\n.suey-property-full {\n    margin: auto;\n    margin-right: var(--pad-small) !important;\n    justify-content: center;\n    text-align: center;\n    height: 100%;\n    min-height: var(--row-height);\n    width: calc(100% - var(--pad-small)) !important;\n}\n\n.suey-property-full > *:not(.suey-property-space) {\n    flex: 1 1 auto;\n    min-height: var(--row-height);\n    min-width: 0;\n    margin: auto;\n    height: 100%;\n}\n\n/***** Right side of Property Row */\n\n.suey-property-right .suey-number:not(.suey-property-tiny-row),\n.suey-property-right > *:not(.suey-property-tiny-row):not(.suey-property-button):not(.suey-property-space) {\n    flex: 1 1 auto;\n    min-height: var(--row-height);\n    min-width: 0;\n    margin: auto;\n    text-align: left;\n    height: 100%;\n}\n\n.suey-property-right > .suey-button:not(.suey-property-tiny-row):not(.suey-property-button):not(.suey-menu-button) {\n    text-align: center;\n}\n\n/* Right side of Property Box flex fill when using multiple controls */\n.suey-property-tiny-row {\n    --min-width: 2em;\n\n    flex: 2 2 var(--min-width);\n    min-height: var(--row-height);\n    min-width: var(--min-width);\n    height: 100%;\n}\n\n/***** Property Button */\n\n/* Button appearing in right column of Property List, fixed size */\n.suey-property-button {\n    position: relative;\n    min-height: var(--row-height);\n    min-width: 2.1em;\n}\n\n/* Button appearing in right column of Property List, flex box */\n.suey-property-button-flex {\n    flex: 1 1 auto;\n    position: relative;\n    display: block;\n    overflow: hidden;\n    margin: 0 0.05em;\n    padding: 0 0.1em;\n    height: var(--row-height);\n    white-space: nowrap;\n}\n\n/********** Tree List **********/\n\n.suey-tree-list {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: left;\n    overflow: hidden;\n    margin: var(--pad-small);\n\n    color: rgba(var(--text), 1.0);\n    background-color: rgba(var(--background-dark), 0.25);\n    border: 0;\n    border-radius: var(--radius-small);\n    outline: solid var(--border-small) rgba(var(--shadow), 0.35);\n    box-shadow: inset 0 0 var(--pad-small) 0 rgba(var(--midlight), 0.5); /* inner-glow */\n\n    cursor: default;\n}\n\n/********** Tree List Option **********/\n\n.suey-tree-list .suey-option {\n    position: relative;\n    text-align: left;\n    border: var(--border-small) solid transparent;\n    padding: var(--pad-x-small);\n    width: 100%;\n    white-space: nowrap;\n}\n.suey-tree-list .suey-option:hover:not(.suey-no-select) {\n    color: rgba(var(--text-light), 1.0);\n    background-color: rgba(var(--background-dark), 0.2);\n}\n\n.suey-tree-list .suey-option.suey-active:not(.suey-no-select) {\n    color: rgba(var(--highlight), 1.0);\n    background-color: rgba(var(--icon-light), 0.4);\n    border-top: var(--border-small) solid rgba(var(--shadow), 0.25);\n    border-bottom: var(--border-small) solid rgba(var(--shadow), 0.25);\n    border-radius: var(--radius-small);\n}\n.suey-tree-list .suey-option.suey-active-top:not(.suey-no-select) {\n    border-bottom: var(--border-small) solid transparent;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.suey-tree-list .suey-option.suey-active-bottom:not(.suey-no-select) {\n    border-top: var(--border-small) solid transparent;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n\n.suey-tree-list .suey-option.suey-drag:not(.suey-active) {\n    border: var(--border-small) solid rgba(var(--icon-light), 1.0);\n    border-radius: var(--radius-small);\n}\n.suey-tree-list .suey-option.suey-drag-top:not(.suey-active) {\n    border-top: var(--border-small) solid rgba(var(--icon-light), 1.0);\n}\n.suey-tree-list .suey-option.suey-drag-bottom:not(.suey-active) {\n    border-bottom: var(--border-small) solid rgba(var(--icon-light), 1.0);\n}\n\n/********** Tree List Opener **********/\n\n.suey-tree-list .suey-opener {\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    margin: 0 0.25em;\n\n    vertical-align: top;\n    text-align: center;\n}\n\n.suey-tree-list .suey-opener.suey-is-open:after {\n    content: '-';\n}\n\n.suey-tree-list .suey-opener.suey-is-closed:after {\n    content: '+';\n}\n\n/********** Drag Image **********/\n\n.suey-drag-image {\n    display: flex;\n    position: absolute;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    left: 0;\n    top: 0;\n    background-color: transparent;\n    box-shadow: none;\n    border: none;\n    border-radius: var(--radius-small);\n    z-index: 100000; /* Drag Clone */\n}\n";
var stylesheet$4="/********** Property List **********/\n\n.suey-property-list {\n    width: 100%;\n}\n\n/***** Property Header */\n\n.suey-property-header-title {\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    width: 100%;\n    min-height: calc(var(--row-height));\n    overflow: hidden;\n\n    cursor: default;\n    background-color: rgba(var(--icon), 0.1); /* transparent; */\n    border-top: solid var(--border-small) rgba(var(--shadow), 0.25);\n    border-bottom: solid var(--border-small) rgba(var(--shadow), 0.25);\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n    margin: var(--pad-micro) 0;\n    padding: 0;\n    padding-left: 0.425em;\n    padding-top: var(--pad-micro);\n    padding-bottom: var(--pad-micro);\n}\n\n.suey-shrinkable.suey-borderless-panel .suey-property-header-title {\n    border-radius: var(--radius-small);\n}\n\n.suey-property-header-icon > * {\n    filter: var(--drop-shadow);\n}\n\n.suey-property-header-icon {\n    flex-grow: 0;\n    flex-shrink: 0;\n\n    position: relative;\n    display: flex;\n    margin: 0.15em;\n    height: calc(var(--arrow-size) * 3.5);\n    min-height: calc(var(--arrow-size) * 3.5);\n    width: calc(var(--arrow-size) * 3.5);\n    min-width: calc(var(--arrow-size) * 3.5);\n}\n\n.suey-property-header-text {\n    flex-grow: 1;\n    flex-shrink: 2;\n    color: rgba(var(--text-light), 1.0);\n    font-size: 100%;\n    overflow: hidden;\n    text-align: left;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    padding-left: 0.5em;\n}\n\n/***** Property Row */\n\n.suey-property-row {\n    position: relative;\n    min-height: var(--row-height);\n}\n\n.suey-property-row:hover .suey-property-left {\n    color: rgba(var(--highlight), 0.8);\n}\n\n.suey-property-row:hover .suey-property-left .suey-image {\n    filter: brightness(250%);\n}\n\n.suey-property-space {\n    flex: 0 0 auto;\n    min-width: 0.2em;\n}\n\n.suey-property-left {\n    --left-property-width: 50%;\n\n    width: var(--left-property-width) !important;\n\n    position: relative;\n    flex-shrink: 0;\n    margin: 0;\n    padding-left: var(--pad-medium);\n    height: 100%;\n    min-height: var(--row-height);\n    text-align: left;\n    text-transform: capitalize;\n}\n.suey-left-tab-spacing {\n    padding-left: 0.85em;\n}\n\n.suey-property-right {\n    --right-property-width: 50%;\n\n    width: calc(var(--right-property-width) - var(--pad-small)) !important;\n\n    flex-shrink: 0;\n    margin: auto;\n    margin-right: var(--pad-small) !important;\n    justify-content: left;\n    text-align: left;\n    height: 100%;\n    min-height: var(--row-height);\n}\n\n.suey-property-full {\n    margin: auto;\n    margin-right: var(--pad-small) !important;\n    justify-content: center;\n    text-align: center;\n    height: 100%;\n    min-height: var(--row-height);\n    width: calc(100% - var(--pad-small)) !important;\n}\n\n.suey-property-full > *:not(.suey-property-space) {\n    flex: 1 1 auto;\n    min-height: var(--row-height);\n    min-width: 0;\n    margin: auto;\n    height: 100%;\n}\n\n/***** Right side of Property Row */\n\n.suey-property-right .suey-number:not(.suey-property-tiny-row),\n.suey-property-right > *:not(.suey-property-tiny-row):not(.suey-property-button):not(.suey-property-space) {\n    flex: 1 1 auto;\n    min-height: var(--row-height);\n    min-width: 0;\n    margin: auto;\n    text-align: left;\n    height: 100%;\n}\n\n.suey-property-right > .suey-button:not(.suey-property-tiny-row):not(.suey-property-button):not(.suey-menu-button) {\n    text-align: center;\n}\n\n/* Right side of Property Box flex fill when using multiple controls */\n.suey-property-tiny-row {\n    --min-width: 2em;\n\n    flex: 2 2 var(--min-width);\n    min-height: var(--row-height);\n    min-width: var(--min-width);\n    height: 100%;\n}\n\n/***** Property Button */\n\n/* Button appearing in right column of Property List, fixed size */\n.suey-property-button {\n    position: relative;\n    min-height: var(--row-height);\n    min-width: 2.1em;\n}\n\n/* Button appearing in right column of Property List, flex box */\n.suey-property-button-flex {\n    flex: 1 1 auto;\n    position: relative;\n    display: block;\n    overflow: hidden;\n    margin: 0 0.05em;\n    padding: 0 0.1em;\n    height: var(--row-height);\n    white-space: nowrap;\n}\n\n/********** Tree List **********/\n\n.suey-tree-list {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    justify-content: left;\n    overflow: hidden;\n    margin: var(--pad-small);\n\n    color: rgba(var(--text), 1.0);\n    background-color: rgba(var(--background-dark), 0.25);\n    border: 0;\n    border-radius: var(--radius-small);\n    outline: solid var(--border-small) rgba(var(--shadow), 0.35);\n    box-shadow: inset 0 0 var(--pad-small) 0 rgba(var(--midlight), 0.5); /* inner-glow */\n\n    cursor: default;\n}\n\n/********** Tree List Option **********/\n\n.suey-tree-list .suey-option {\n    position: relative;\n    text-align: left;\n    border: var(--border-small) solid transparent;\n    padding: var(--pad-x-small);\n    width: 100%;\n    white-space: nowrap;\n}\n.suey-tree-list .suey-option:hover:not(.suey-no-select) {\n    color: rgba(var(--text-light), 1.0);\n    background-color: rgba(var(--background-dark), 0.2);\n}\n\n.suey-tree-list .suey-option.suey-active:not(.suey-no-select) {\n    color: rgba(var(--highlight), 1.0);\n    background-color: rgba(var(--icon-light), 0.4);\n    border-top: var(--border-small) solid rgba(var(--shadow), 0.25);\n    border-bottom: var(--border-small) solid rgba(var(--shadow), 0.25);\n    border-radius: var(--radius-small);\n}\n.suey-tree-list .suey-option.suey-active-top:not(.suey-no-select) {\n    border-bottom: var(--border-small) solid transparent;\n    border-bottom-left-radius: 0;\n    border-bottom-right-radius: 0;\n}\n.suey-tree-list .suey-option.suey-active-bottom:not(.suey-no-select) {\n    border-top: var(--border-small) solid transparent;\n    border-top-left-radius: 0;\n    border-top-right-radius: 0;\n}\n\n.suey-tree-list .suey-option.suey-drag:not(.suey-active) {\n    border: var(--border-small) solid rgba(var(--icon-light), 1.0);\n    border-radius: var(--radius-small);\n}\n.suey-tree-list .suey-option.suey-drag-top:not(.suey-active) {\n    border-top: var(--border-small) solid rgba(var(--icon-light), 1.0);\n}\n.suey-tree-list .suey-option.suey-drag-bottom:not(.suey-active) {\n    border-bottom: var(--border-small) solid rgba(var(--icon-light), 1.0);\n}\n\n/********** Tree List Opener **********/\n\n.suey-tree-list .suey-opener {\n    display: inline-block;\n    width: 1em;\n    height: 1em;\n    margin: 0 0.25em;\n\n    vertical-align: top;\n    text-align: center;\n}\n\n.suey-tree-list .suey-opener.suey-is-open:after {\n    content: '-';\n}\n\n.suey-tree-list .suey-opener.suey-is-closed:after {\n    content: '+';\n}\n\n/********** Drag Image **********/\n\n.suey-drag-image {\n    display: flex;\n    position: absolute;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    left: 0;\n    top: 0;\n    background-color: transparent;\n    box-shadow: none;\n    border: none;\n    border-radius: var(--radius-small);\n    z-index: 100000; /* Drag Clone */\n}\n";
styleInject(css_248z$4);

var css_248z$3 = "/********** Graph **********/\n\n.suey-graph-input, .suey-graph-grid, .suey-graph-nodes, .suey-graph-lines {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n}\n\n/* Div used for processing user input */\n.suey-graph-input {\n    background: transparent;\n    z-index: -1; /* Graph Input */\n}\n\n/* Background div that holds tiled grid */\n.suey-graph-grid {\n    pointer-events: none;\n    background-color: rgb(var(--darkness));\n    background-repeat: repeat;\n    transition: none;\n}\n\n/* Scalable div to hold nodes */\n.suey-graph-nodes {\n    pointer-events: none;\n    background-color: transparent;\n    transition: none;\n}\n\n/* Canvas where lines are drawn */\n.suey-graph-lines {\n    pointer-events: none;\n}\n\n/* Shows rubberband box */\n.suey-graph-band-box {\n    position: absolute;\n    display: none;\n    background-color: rgba(var(--icon), 0.2);\n    border: solid var(--border-small) rgba(var(--icon), 0.75);\n}\n\n/***** Graph Minimap */\n\n.suey-mini-map {\n    position: absolute;\n    background-color: rgba(var(--background-dark), 0.5);\n    border: var(--border-small) solid rgba(var(--icon), 0.75);\n    border-radius: var(--radius-large);\n    bottom: var(--pad-large);\n    right: var(--pad-large);\n    width: 20%;\n    height: 20%;\n    z-index: 101; /* GraphMap */\n    cursor: grab;\n}\n\n.suey-mini-map-canvas {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    outline: none;\n}\n\n.suey-mini-map-resizers {\n    position: absolute;\n    width: calc(100% + var(--resize-size));\n    height: calc(100% + var(--resize-size));\n    margin: calc(var(--resize-size) / -2);\n    outline: none;\n}\n\n/********** Node **********/\n\n.suey-node {\n    --node-color:       255, 0, 0;\n\n    pointer-events: all;\n    position: absolute;\n    background-color: transparent;\n    border-radius: var(--radius-large);\n    border: none;\n    outline: solid var(--pad-micro) rgb(var(--black), 0.5);\n    margin: 0;\n    cursor: inherit;\n    overflow: visible;\n    z-index: 0; /* Node */\n}\n\n.suey-active-node {\n    z-index: 1; /* Active Node */\n}\n\n.suey-node:hover, .suey-node.suey-node-selected {\n    filter: brightness(120%);\n}\n\n.suey-node.suey-too-small .suey-resizer {\n    pointer-events: none;\n}\n\n.suey-node-panel {\n    pointer-events: none;\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    background-color: rgba(var(--button-dark), 1);\n    border-radius: var(--radius-large);\n    position: absolute;\n    left: 0; top: 0; right: 0; bottom: 0;\n    margin: 0;\n    padding: 0;\n    cursor: inherit;\n    overflow: visible;\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n}\n\n.suey-node-border {\n    pointer-events: none;\n    border: var(--border-small) solid transparent;\n    border-radius: var(--radius-large);\n    position: absolute;\n    left: 0; top: 0; right: 0; bottom: 0;\n    margin: calc(var(--border-small) * -0.5);\n    padding: 0;\n}\n\n.suey-node.suey-node-displayed .suey-node-border {\n    border: var(--border-small) solid rgba(var(--complement), 1);\n}\n\n.suey-node.suey-node-selected .suey-node-border {\n    border: var(--border-small) solid rgba(var(--icon), 1);\n}\n\n.suey-node.suey-node-selected,\n.suey-node.suey-node-displayed {\n    outline: solid var(--pad-small) rgb(var(--black), 0.5);\n}\n.suey-node.suey-node-selected .suey-node-border {\n    border: var(--border-small) solid rgba(var(--icon), 1);\n}\n/* .suey-node.suey-node-selected.suey-node.suey-node-displayed {\n    outline: solid var(--pad-small) rgb(var(--icon), 1);\n} */\n/* .suey-node.suey-node-selected.suey-node.suey-node-displayed .suey-node-border {\n    border: var(--border-small) solid rgba(var(--complement), 1);\n} */\n\n.suey-node-resizers {\n    pointer-events: all;\n    position: absolute;\n    opacity: 0;\n    left: 0; top: 0; right: 0; bottom: 0;\n    margin: calc(var(--resize-size) / -2);\n    padding: 0;\n}\n\n/***** Node Header */\n\n.suey-node-header-title {\n    pointer-events: none;\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.5), rgba(var(--icon-dark), 0.5));\n    border-top-right-radius: var(--radius-large);\n    border-top-left-radius: var(--radius-large);\n    width: 100%;\n    height: 1.82em;\n    margin: 0;\n    padding: var(--pad-x-small) 0.5em; /* vertical | horizontal */\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.2);\n}\n\n.suey-node-header-icon .suey-vector-box {\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 85%;\n    height: 85%;\n    filter: drop-shadow(0 0 var(--pad-micro) rgba(var(--shadow), 0.8));\n}\n\n.suey-node-header-icon .suey-image {\n    filter: brightness(calc(10 * var(--bright))) opacity(0.9);\n}\n\n.suey-node-displayed .suey-node-header-icon .suey-image {\n    filter: var(--tint-complement);\n}\n\n.suey-node-header-icon {\n    pointer-events: none;\n    position: absolute;\n    background-color: rgba(var(--button-dark), 1);\n    border-radius: 0.25em;\n    left: 0.2em;\n    top: 0.2em;\n    width: 1.65em;\n    height: 1.35em;\n    opacity: 1;\n    box-shadow: inset 0 0 var(--pixel) rgba(var(--shadow), 0.5);\n}\n\n.suey-node-header-text {\n    pointer-events: none;\n    flex-grow: 1;\n    flex-shrink: 2;\n    color: rgba(var(--text-light), 1.0);\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n    font-size: 100%;\n    overflow: hidden;\n    text-align: center;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    padding-left: 0.5em;\n}\n\n.suey-node-displayed .suey-node-header-text {\n    color: rgba(var(--complement), 1);\n    text-shadow: 0 0 0.15em rgba(var(--shadow), 1);\n}\n\n/***** Node Item */\n\n.suey-node-interior {\n    pointer-events: none;\n    display: flex;\n    flex-direction: row;\n    flex: 1 1 auto;\n    position: relative;\n    background-color: transparent;\n    min-width: 100px;\n    min-height: 25px;\n}\n\n.suey-node-item-list {\n    pointer-events: none;\n    display: block;\n    flex: 1 1 auto;\n    position: relative;\n    background-color: transparent;\n    width: 50%;\n    min-height: 25px;\n}\n\n/* Item */\n.suey-node-item {\n    pointer-events: none;\n    position: relative;\n    background-color: transparent;\n    color: var(--text);\n    font-size: 85%;\n    width: 100%;\n    padding: var(--pad-medium);\n    margin-top: var(--pad-x-small);\n    margin-bottom: var(--pad-x-small);\n    vertical-align: middle;\n}\n\n.suey-node-displayed .suey-node-item {\n    color: rgba(var(--complement), 1);\n}\n\n.suey-node-left {\n    text-align: left;\n    padding-left: 1.2em;\n}\n\n.suey-node-right {\n    text-align: right;\n    padding-right: 1.2em;\n}\n\n/* Item point */\n.suey-node-item-point {\n    pointer-events: all;\n    position: absolute;\n    width: 1em;\n    height: 1em;\n    background-color: rgba(var(--background-dark), 1);\n    border: var(--border-small) solid rgba(var(--button-light), 1);\n    border-radius: 0.3em;\n    outline: none;\n    top: 50%;\n    overflow: visible;\n    z-index: 100; /* Node Item Point */\n}\n\n.suey-node-left .suey-node-item-point {\n    left: 0;\n    transform: translate(-50%, -50%);\n}\n.suey-node-right .suey-node-item-point {\n    right: 0;\n    transform: translate( 50%, -50%);\n}\n\n/* Increases mouse over hit area */\n.suey-node-item-point::before {\n    content: ' ';\n    position: absolute;\n    left: 0; right: 0; top: 0; bottom: 0;\n    margin: -0.5em;\n    background-color: transparent;\n}\n\n/* Inner square */\n.suey-node-item.suey-item-connected .suey-node-item-point::after,\n.suey-node-item .suey-node-item-point.suey-active-item::after {\n    content: ' ';\n    position: absolute;\n    left: 0; right: 0; top: 0; bottom: 0;\n    margin: var(--pad-x-small);\n    background-color: rgb(var(--node-color));\n    border-radius: 0.08em;\n}\n\n/* Item point highlight border */\n.suey-node.suey-node-displayed .suey-node-item-point {\n    border: var(--border-small) solid rgba(var(--complement), 1);\n}\n.suey-node.suey-node-selected .suey-node-item-point {\n    border: var(--border-small) solid rgba(var(--icon), 1);\n}\n\n.suey-node-item-point.suey-hover-point, .suey-node.suey-node-selected .suey-node-item-point.suey-hover-point,\n.suey-node-item-point.suey-active-item, .suey-node.suey-node-selected .suey-node-item-point.suey-active-item {\n    border: var(--border-small) solid rgba(var(--highlight), 1);\n    width: 1.2em;\n    height: 1.2em;\n}\n\n/* Item Unhooker (little 'X') */\n.suey-node-item-unhook {\n    pointer-events: none;\n    position: absolute;\n    width: 1em;\n    height: 1em;\n    top: 10%;\n    background-color: transparent;\n    border: none;\n    outline: none;\n    overflow: visible;\n    filter: brightness(50%);\n    transform: translateY(-50%);\n    opacity: 0;\n}\n\n.suey-node-right .suey-node-item-unhook {\n    left: calc(100% + 0.7em);\n}\n.suey-node-left .suey-node-item-unhook {\n    left: calc(0em - var(--row-height));\n}\n\n/* Increases mouse over hit area */\n.suey-node-item-unhook::before {\n    content: ' ';\n    position: absolute;\n    left: 0; right: 0; top: 0; bottom: 0;\n    margin: -0.5em;\n    background-color: transparent;\n}\n\n.suey-node-item.suey-item-connected .suey-node-item-unhook {\n    pointer-events: all;\n}\n\n.suey-node-item.suey-item-connected:hover .suey-node-item-unhook {\n    opacity: 1;\n}\n\n.suey-node-item-unhook .suey-image {\n    filter: var(--drop-shadow);\n}\n\n.suey-node-item.suey-item-connected .suey-node-item-unhook:hover {\n    filter: brightness(100%);\n}\n";
var stylesheet$3="/********** Graph **********/\n\n.suey-graph-input, .suey-graph-grid, .suey-graph-nodes, .suey-graph-lines {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    padding: 0;\n}\n\n/* Div used for processing user input */\n.suey-graph-input {\n    background: transparent;\n    z-index: -1; /* Graph Input */\n}\n\n/* Background div that holds tiled grid */\n.suey-graph-grid {\n    pointer-events: none;\n    background-color: rgb(var(--darkness));\n    background-repeat: repeat;\n    transition: none;\n}\n\n/* Scalable div to hold nodes */\n.suey-graph-nodes {\n    pointer-events: none;\n    background-color: transparent;\n    transition: none;\n}\n\n/* Canvas where lines are drawn */\n.suey-graph-lines {\n    pointer-events: none;\n}\n\n/* Shows rubberband box */\n.suey-graph-band-box {\n    position: absolute;\n    display: none;\n    background-color: rgba(var(--icon), 0.2);\n    border: solid var(--border-small) rgba(var(--icon), 0.75);\n}\n\n/***** Graph Minimap */\n\n.suey-mini-map {\n    position: absolute;\n    background-color: rgba(var(--background-dark), 0.5);\n    border: var(--border-small) solid rgba(var(--icon), 0.75);\n    border-radius: var(--radius-large);\n    bottom: var(--pad-large);\n    right: var(--pad-large);\n    width: 20%;\n    height: 20%;\n    z-index: 101; /* GraphMap */\n    cursor: grab;\n}\n\n.suey-mini-map-canvas {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    margin: 0;\n    outline: none;\n}\n\n.suey-mini-map-resizers {\n    position: absolute;\n    width: calc(100% + var(--resize-size));\n    height: calc(100% + var(--resize-size));\n    margin: calc(var(--resize-size) / -2);\n    outline: none;\n}\n\n/********** Node **********/\n\n.suey-node {\n    --node-color:       255, 0, 0;\n\n    pointer-events: all;\n    position: absolute;\n    background-color: transparent;\n    border-radius: var(--radius-large);\n    border: none;\n    outline: solid var(--pad-micro) rgb(var(--black), 0.5);\n    margin: 0;\n    cursor: inherit;\n    overflow: visible;\n    z-index: 0; /* Node */\n}\n\n.suey-active-node {\n    z-index: 1; /* Active Node */\n}\n\n.suey-node:hover, .suey-node.suey-node-selected {\n    filter: brightness(120%);\n}\n\n.suey-node.suey-too-small .suey-resizer {\n    pointer-events: none;\n}\n\n.suey-node-panel {\n    pointer-events: none;\n    display: flex;\n    flex-direction: column;\n    align-items: stretch;\n    background-color: rgba(var(--button-dark), 1);\n    border-radius: var(--radius-large);\n    position: absolute;\n    left: 0; top: 0; right: 0; bottom: 0;\n    margin: 0;\n    padding: 0;\n    cursor: inherit;\n    overflow: visible;\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n}\n\n.suey-node-border {\n    pointer-events: none;\n    border: var(--border-small) solid transparent;\n    border-radius: var(--radius-large);\n    position: absolute;\n    left: 0; top: 0; right: 0; bottom: 0;\n    margin: calc(var(--border-small) * -0.5);\n    padding: 0;\n}\n\n.suey-node.suey-node-displayed .suey-node-border {\n    border: var(--border-small) solid rgba(var(--complement), 1);\n}\n\n.suey-node.suey-node-selected .suey-node-border {\n    border: var(--border-small) solid rgba(var(--icon), 1);\n}\n\n.suey-node.suey-node-selected,\n.suey-node.suey-node-displayed {\n    outline: solid var(--pad-small) rgb(var(--black), 0.5);\n}\n.suey-node.suey-node-selected .suey-node-border {\n    border: var(--border-small) solid rgba(var(--icon), 1);\n}\n/* .suey-node.suey-node-selected.suey-node.suey-node-displayed {\n    outline: solid var(--pad-small) rgb(var(--icon), 1);\n} */\n/* .suey-node.suey-node-selected.suey-node.suey-node-displayed .suey-node-border {\n    border: var(--border-small) solid rgba(var(--complement), 1);\n} */\n\n.suey-node-resizers {\n    pointer-events: all;\n    position: absolute;\n    opacity: 0;\n    left: 0; top: 0; right: 0; bottom: 0;\n    margin: calc(var(--resize-size) / -2);\n    padding: 0;\n}\n\n/***** Node Header */\n\n.suey-node-header-title {\n    pointer-events: none;\n    position: relative;\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    background-image: linear-gradient(to bottom, rgba(var(--icon-light), 0.5), rgba(var(--icon-dark), 0.5));\n    border-top-right-radius: var(--radius-large);\n    border-top-left-radius: var(--radius-large);\n    width: 100%;\n    height: 1.82em;\n    margin: 0;\n    padding: var(--pad-x-small) 0.5em; /* vertical | horizontal */\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.2);\n}\n\n.suey-node-header-icon .suey-vector-box {\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 85%;\n    height: 85%;\n    filter: drop-shadow(0 0 var(--pad-micro) rgba(var(--shadow), 0.8));\n}\n\n.suey-node-header-icon .suey-image {\n    filter: brightness(calc(10 * var(--bright))) opacity(0.9);\n}\n\n.suey-node-displayed .suey-node-header-icon .suey-image {\n    filter: var(--tint-complement);\n}\n\n.suey-node-header-icon {\n    pointer-events: none;\n    position: absolute;\n    background-color: rgba(var(--button-dark), 1);\n    border-radius: 0.25em;\n    left: 0.2em;\n    top: 0.2em;\n    width: 1.65em;\n    height: 1.35em;\n    opacity: 1;\n    box-shadow: inset 0 0 var(--pixel) rgba(var(--shadow), 0.5);\n}\n\n.suey-node-header-text {\n    pointer-events: none;\n    flex-grow: 1;\n    flex-shrink: 2;\n    color: rgba(var(--text-light), 1.0);\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n    font-size: 100%;\n    overflow: hidden;\n    text-align: center;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    padding-left: 0.5em;\n}\n\n.suey-node-displayed .suey-node-header-text {\n    color: rgba(var(--complement), 1);\n    text-shadow: 0 0 0.15em rgba(var(--shadow), 1);\n}\n\n/***** Node Item */\n\n.suey-node-interior {\n    pointer-events: none;\n    display: flex;\n    flex-direction: row;\n    flex: 1 1 auto;\n    position: relative;\n    background-color: transparent;\n    min-width: 100px;\n    min-height: 25px;\n}\n\n.suey-node-item-list {\n    pointer-events: none;\n    display: block;\n    flex: 1 1 auto;\n    position: relative;\n    background-color: transparent;\n    width: 50%;\n    min-height: 25px;\n}\n\n/* Item */\n.suey-node-item {\n    pointer-events: none;\n    position: relative;\n    background-color: transparent;\n    color: var(--text);\n    font-size: 85%;\n    width: 100%;\n    padding: var(--pad-medium);\n    margin-top: var(--pad-x-small);\n    margin-bottom: var(--pad-x-small);\n    vertical-align: middle;\n}\n\n.suey-node-displayed .suey-node-item {\n    color: rgba(var(--complement), 1);\n}\n\n.suey-node-left {\n    text-align: left;\n    padding-left: 1.2em;\n}\n\n.suey-node-right {\n    text-align: right;\n    padding-right: 1.2em;\n}\n\n/* Item point */\n.suey-node-item-point {\n    pointer-events: all;\n    position: absolute;\n    width: 1em;\n    height: 1em;\n    background-color: rgba(var(--background-dark), 1);\n    border: var(--border-small) solid rgba(var(--button-light), 1);\n    border-radius: 0.3em;\n    outline: none;\n    top: 50%;\n    overflow: visible;\n    z-index: 100; /* Node Item Point */\n}\n\n.suey-node-left .suey-node-item-point {\n    left: 0;\n    transform: translate(-50%, -50%);\n}\n.suey-node-right .suey-node-item-point {\n    right: 0;\n    transform: translate( 50%, -50%);\n}\n\n/* Increases mouse over hit area */\n.suey-node-item-point::before {\n    content: ' ';\n    position: absolute;\n    left: 0; right: 0; top: 0; bottom: 0;\n    margin: -0.5em;\n    background-color: transparent;\n}\n\n/* Inner square */\n.suey-node-item.suey-item-connected .suey-node-item-point::after,\n.suey-node-item .suey-node-item-point.suey-active-item::after {\n    content: ' ';\n    position: absolute;\n    left: 0; right: 0; top: 0; bottom: 0;\n    margin: var(--pad-x-small);\n    background-color: rgb(var(--node-color));\n    border-radius: 0.08em;\n}\n\n/* Item point highlight border */\n.suey-node.suey-node-displayed .suey-node-item-point {\n    border: var(--border-small) solid rgba(var(--complement), 1);\n}\n.suey-node.suey-node-selected .suey-node-item-point {\n    border: var(--border-small) solid rgba(var(--icon), 1);\n}\n\n.suey-node-item-point.suey-hover-point, .suey-node.suey-node-selected .suey-node-item-point.suey-hover-point,\n.suey-node-item-point.suey-active-item, .suey-node.suey-node-selected .suey-node-item-point.suey-active-item {\n    border: var(--border-small) solid rgba(var(--highlight), 1);\n    width: 1.2em;\n    height: 1.2em;\n}\n\n/* Item Unhooker (little 'X') */\n.suey-node-item-unhook {\n    pointer-events: none;\n    position: absolute;\n    width: 1em;\n    height: 1em;\n    top: 10%;\n    background-color: transparent;\n    border: none;\n    outline: none;\n    overflow: visible;\n    filter: brightness(50%);\n    transform: translateY(-50%);\n    opacity: 0;\n}\n\n.suey-node-right .suey-node-item-unhook {\n    left: calc(100% + 0.7em);\n}\n.suey-node-left .suey-node-item-unhook {\n    left: calc(0em - var(--row-height));\n}\n\n/* Increases mouse over hit area */\n.suey-node-item-unhook::before {\n    content: ' ';\n    position: absolute;\n    left: 0; right: 0; top: 0; bottom: 0;\n    margin: -0.5em;\n    background-color: transparent;\n}\n\n.suey-node-item.suey-item-connected .suey-node-item-unhook {\n    pointer-events: all;\n}\n\n.suey-node-item.suey-item-connected:hover .suey-node-item-unhook {\n    opacity: 1;\n}\n\n.suey-node-item-unhook .suey-image {\n    filter: var(--drop-shadow);\n}\n\n.suey-node-item.suey-item-connected .suey-node-item-unhook:hover {\n    filter: brightness(100%);\n}\n";
styleInject(css_248z$3);

var css_248z$2 = "/********** Panel Button **********/\n\n.suey-panel-button {\n    pointer-events: all;\n    border: var(--border-small) solid rgb(var(--icon));\n    outline: solid var(--border-small) rgba(var(--shadow), 0.2);\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n    position: absolute;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    filter: none;\n    z-index: 1001; /* Panel Button */\n}\n\n.suey-panel-button:hover {\n    opacity: 1.0;\n    filter: brightness(125%);\n    transition: opacity 0.1s;\n}\n\n.suey-panel-button:active {\n    box-shadow: inset 0 var(--pad-micro) var(--pad-x-small) 0 rgba(var(--shadow), 0.75); /* sunk-in-shadow */\n    filter: brightness(100%);\n}\n\n/********** Corner Buttons **********/\n\n.suey-corner-button {\n    cursor: pointer;\n    border-radius: 50%;\n    outline: none;\n    opacity: 0;\n    overflow: visible;\n    transition: background-color 0.1s, opacity 0.25s ease-in-out;\n}\n\n/* Enlarge button click area */\n.suey-corner-button:before {\n    position: absolute;\n    content: '';\n    top: -0.25em;\n    right: -0.25em;\n    left: -0.25em;\n    bottom: -0.25em;\n    outline: none;\n}\n\n.suey-corner-button.suey-item-shown {\n    opacity: 1.0;\n    filter: brightness(100%);\n    transition: opacity 0.1s;\n}\n\n.suey-corner-button.suey-item-hidden {\n    opacity: 0;\n    transition: opacity 0.1s;\n}\n\n.suey-corner-image {\n    outline: none;\n    opacity: 0;\n    transition: opacity 0.1s;\n}\n\n.suey-corner-button:hover .suey-corner-image {\n    opacity: 1.0;\n}\n\n/********** Resizeable **********/\n\n.suey-resizer {\n    --height: 100%;\n    --width: 100%;\n    --offset: 0em;\n    position: absolute;\n    pointer-events: all;\n    margin: 0;\n    opacity: 0;                             /* NOTE: Change to > 0.0 to see 'Resizers' */\n    z-index: 0; /* Resizer */\n}\n\n.suey-resizer-left {\n    background-color: rgb(255, 0, 0);\n    width: var(--resize-size);\n    height: calc(var(--height) - (var(--offset) * 2));\n    left: 0;\n    top: 0;\n    margin-left: var(--offset);\n    margin-top: var(--offset);\n    cursor: col-resize;\n}\n\n.suey-resizer-right {\n    background-color: rgb(0, 0, 255);\n    width: var(--resize-size);\n    height: calc(var(--height) - (var(--offset) * 2));\n    right: 0;\n    top: 0;\n    margin-right: var(--offset);\n    margin-top: var(--offset);\n    cursor: col-resize;\n}\n\n.suey-resizer-top {\n    background-color: rgb(0, 255, 0);\n    width: calc(var(--width) - (var(--offset) * 2));\n    height: var(--resize-size);\n    left: 0;\n    top: 0;\n    margin-left: var(--offset);\n    margin-top: var(--offset);\n    cursor: row-resize;\n}\n\n.suey-resizer-bottom {\n    background-color: rgb(255, 255, 255);\n    width: calc(var(--width) - (var(--offset) * 2));\n    height: var(--resize-size);\n    left: 0;\n    bottom: 0;\n    margin-left: var(--offset);\n    margin-bottom: var(--offset);\n    cursor: row-resize;\n}\n\n.suey-resizer-top-left {\n    background-color: rgb(255, 255, 0);\n    width: var(--resize-size);\n    height: var(--resize-size);\n    left: 0;\n    top: 0;\n    margin-left: var(--offset);\n    margin-top: var(--offset);\n    cursor: nwse-resize;\n    z-index: 100; /* Resizer Corner */\n}\n\n.suey-resizer-top-right {\n    background-color: rgb(0, 255, 255);\n    width: var(--resize-size);\n    height: var(--resize-size);\n    right: 0;\n    top: 0;\n    margin-right: var(--offset);\n    margin-top: var(--offset);\n    cursor: nesw-resize;\n    z-index: 100; /* Resizer Corner */\n}\n\n.suey-resizer-bottom-right {\n    background-color: rgb(255, 0, 255);\n    width: var(--resize-size);\n    height: var(--resize-size);\n    right: 0;\n    bottom: 0;\n    margin-right: var(--offset);\n    margin-bottom: var(--offset);\n    cursor: nwse-resize;\n    z-index: 100; /* Resizer Corner */\n}\n\n.suey-resizer-bottom-left {\n    background-color: rgb(0, 0, 0);\n    width: var(--resize-size);\n    height: var(--resize-size);\n    left: 0;\n    bottom: 0;\n    margin-left: var(--offset);\n    margin-bottom: var(--offset);\n    cursor: nesw-resize;\n    z-index: 100; /* Resizer Corner */\n}\n";
var stylesheet$2="/********** Panel Button **********/\n\n.suey-panel-button {\n    pointer-events: all;\n    border: var(--border-small) solid rgb(var(--icon));\n    outline: solid var(--border-small) rgba(var(--shadow), 0.2);\n    box-shadow: /* pop-out-shadow */\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n    position: absolute;\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    filter: none;\n    z-index: 1001; /* Panel Button */\n}\n\n.suey-panel-button:hover {\n    opacity: 1.0;\n    filter: brightness(125%);\n    transition: opacity 0.1s;\n}\n\n.suey-panel-button:active {\n    box-shadow: inset 0 var(--pad-micro) var(--pad-x-small) 0 rgba(var(--shadow), 0.75); /* sunk-in-shadow */\n    filter: brightness(100%);\n}\n\n/********** Corner Buttons **********/\n\n.suey-corner-button {\n    cursor: pointer;\n    border-radius: 50%;\n    outline: none;\n    opacity: 0;\n    overflow: visible;\n    transition: background-color 0.1s, opacity 0.25s ease-in-out;\n}\n\n/* Enlarge button click area */\n.suey-corner-button:before {\n    position: absolute;\n    content: '';\n    top: -0.25em;\n    right: -0.25em;\n    left: -0.25em;\n    bottom: -0.25em;\n    outline: none;\n}\n\n.suey-corner-button.suey-item-shown {\n    opacity: 1.0;\n    filter: brightness(100%);\n    transition: opacity 0.1s;\n}\n\n.suey-corner-button.suey-item-hidden {\n    opacity: 0;\n    transition: opacity 0.1s;\n}\n\n.suey-corner-image {\n    outline: none;\n    opacity: 0;\n    transition: opacity 0.1s;\n}\n\n.suey-corner-button:hover .suey-corner-image {\n    opacity: 1.0;\n}\n\n/********** Resizeable **********/\n\n.suey-resizer {\n    --height: 100%;\n    --width: 100%;\n    --offset: 0em;\n    position: absolute;\n    pointer-events: all;\n    margin: 0;\n    opacity: 0;                             /* NOTE: Change to > 0.0 to see 'Resizers' */\n    z-index: 0; /* Resizer */\n}\n\n.suey-resizer-left {\n    background-color: rgb(255, 0, 0);\n    width: var(--resize-size);\n    height: calc(var(--height) - (var(--offset) * 2));\n    left: 0;\n    top: 0;\n    margin-left: var(--offset);\n    margin-top: var(--offset);\n    cursor: col-resize;\n}\n\n.suey-resizer-right {\n    background-color: rgb(0, 0, 255);\n    width: var(--resize-size);\n    height: calc(var(--height) - (var(--offset) * 2));\n    right: 0;\n    top: 0;\n    margin-right: var(--offset);\n    margin-top: var(--offset);\n    cursor: col-resize;\n}\n\n.suey-resizer-top {\n    background-color: rgb(0, 255, 0);\n    width: calc(var(--width) - (var(--offset) * 2));\n    height: var(--resize-size);\n    left: 0;\n    top: 0;\n    margin-left: var(--offset);\n    margin-top: var(--offset);\n    cursor: row-resize;\n}\n\n.suey-resizer-bottom {\n    background-color: rgb(255, 255, 255);\n    width: calc(var(--width) - (var(--offset) * 2));\n    height: var(--resize-size);\n    left: 0;\n    bottom: 0;\n    margin-left: var(--offset);\n    margin-bottom: var(--offset);\n    cursor: row-resize;\n}\n\n.suey-resizer-top-left {\n    background-color: rgb(255, 255, 0);\n    width: var(--resize-size);\n    height: var(--resize-size);\n    left: 0;\n    top: 0;\n    margin-left: var(--offset);\n    margin-top: var(--offset);\n    cursor: nwse-resize;\n    z-index: 100; /* Resizer Corner */\n}\n\n.suey-resizer-top-right {\n    background-color: rgb(0, 255, 255);\n    width: var(--resize-size);\n    height: var(--resize-size);\n    right: 0;\n    top: 0;\n    margin-right: var(--offset);\n    margin-top: var(--offset);\n    cursor: nesw-resize;\n    z-index: 100; /* Resizer Corner */\n}\n\n.suey-resizer-bottom-right {\n    background-color: rgb(255, 0, 255);\n    width: var(--resize-size);\n    height: var(--resize-size);\n    right: 0;\n    bottom: 0;\n    margin-right: var(--offset);\n    margin-bottom: var(--offset);\n    cursor: nwse-resize;\n    z-index: 100; /* Resizer Corner */\n}\n\n.suey-resizer-bottom-left {\n    background-color: rgb(0, 0, 0);\n    width: var(--resize-size);\n    height: var(--resize-size);\n    left: 0;\n    bottom: 0;\n    margin-left: var(--offset);\n    margin-bottom: var(--offset);\n    cursor: nesw-resize;\n    z-index: 100; /* Resizer Corner */\n}\n";
styleInject(css_248z$2);

var css_248z$1 = ".suey-tooltip, .suey-info-box {\n    display: inline-block;\n    color: rgba(var(--highlight), 1);\n\n    /* NEW: Dark, Flat Box */\n    background-color: rgba(var(--background-dark), 1.0);\n    border: solid var(--border-small) rgba(var(--icon), 1);\n\n    /* OLD: Raised Icon Color Button\n    background-color: transparent;\n    background-image: linear-gradient(to top, rgba(var(--icon-dark), 1.0), rgba(var(--icon-light), 1.0));\n    border-radius: var(--radius-large);\n    */\n\n    border-radius: var(--radius-large);\n    box-shadow:\n        0px 0px 3px 2px rgba(var(--shadow), 0.75),\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n    padding: 0.3em 1.1em;\n    pointer-events: none;\n\n    white-space: nowrap;\n    z-index: 1001; /* Tooltip, InfoBox */\n}\n\n.suey-tooltip {\n    position: absolute;\n    opacity: 0;\n    transform: scale(0.25);\n    transform-origin: center;\n    transition: opacity 0.2s, transform 0.2s;\n    transition-delay: 0ms;\n}\n\n.suey-tooltip.suey-updated {\n    opacity: 1.0;\n    transform: scale(1.0);\n    transition-delay: var(--tooltip-delay);\n}\n\n.suey-info-box {\n    margin: 0;\n    position: absolute;\n    opacity: 0;\n    transition: opacity 1.0s ease-in;\n}\n\n.suey-info-box.suey-updated {\n    opacity: 1.0;\n    transition: opacity 0.0s ease-in;\n}\n";
var stylesheet$1=".suey-tooltip, .suey-info-box {\n    display: inline-block;\n    color: rgba(var(--highlight), 1);\n\n    /* NEW: Dark, Flat Box */\n    background-color: rgba(var(--background-dark), 1.0);\n    border: solid var(--border-small) rgba(var(--icon), 1);\n\n    /* OLD: Raised Icon Color Button\n    background-color: transparent;\n    background-image: linear-gradient(to top, rgba(var(--icon-dark), 1.0), rgba(var(--icon-light), 1.0));\n    border-radius: var(--radius-large);\n    */\n\n    border-radius: var(--radius-large);\n    box-shadow:\n        0px 0px 3px 2px rgba(var(--shadow), 0.75),\n        inset var(--minus) var(--pixel) var(--pixel) var(--pixel) rgba(var(--white), 0.1),\n        inset var(--pixel) var(--minus) var(--pixel) var(--pixel) rgba(var(--black), 0.1);\n    text-shadow: var(--minus) var(--pixel) rgba(var(--shadow), 0.5);\n    padding: 0.3em 1.1em;\n    pointer-events: none;\n\n    white-space: nowrap;\n    z-index: 1001; /* Tooltip, InfoBox */\n}\n\n.suey-tooltip {\n    position: absolute;\n    opacity: 0;\n    transform: scale(0.25);\n    transform-origin: center;\n    transition: opacity 0.2s, transform 0.2s;\n    transition-delay: 0ms;\n}\n\n.suey-tooltip.suey-updated {\n    opacity: 1.0;\n    transform: scale(1.0);\n    transition-delay: var(--tooltip-delay);\n}\n\n.suey-info-box {\n    margin: 0;\n    position: absolute;\n    opacity: 0;\n    transition: opacity 1.0s ease-in;\n}\n\n.suey-info-box.suey-updated {\n    opacity: 1.0;\n    transition: opacity 0.0s ease-in;\n}\n";
styleInject(css_248z$1);

var css_248z = "/********** Disabled **********/\n\n.suey-hidden {\n    display: none !important;\n    pointer-events: none !important;\n}\n\n/** Grayscale filter for disabled items */\n.suey-disabled {\n    filter: contrast(75%) grayscale(100%) !important;\n    opacity: 0.7 !important;\n    cursor: default !important;\n    /* pointer-events: none !important; */\n}\n\n/** Element becomes 'unselectable', https://developer.mozilla.org/en-US/docs/Web/CSS/user-select */\n.suey-unselectable {\n    user-select: none;\n}\n\n/********** Coloring **********/\n\n.suey-icon-colorize /* aqua */ {\n    filter: brightness(65%) sepia(1000%) saturate(1000%) hue-rotate(calc(var(--rotate-hue) + 160deg));\n}\n\n.suey-complement-colorize /* orange */ {\n    filter: brightness(65%) sepia(1000%) saturate(1000%) hue-rotate(calc(var(--rotate-hue) + 0deg));\n}\n\n.suey-match-scheme {\n    filter: saturate(125%) hue-rotate(var(--rotate-hue));\n}\n\n.suey-match-complement {\n    filter: saturate(125%) hue-rotate(calc(var(--rotate-hue) + 180deg));\n}\n\n.suey-black-or-white {\n    filter: brightness(calc(1 * var(--bright)));\n}\n\n.suey-black-or-white.suey-highlight {\n    filter: brightness(calc((2 * var(--bright)) + 0.35));\n}\n\n.suey-black-or-white.suey-drop-shadow {\n    filter: brightness(calc(10 * var(--bright))) var(--drop-shadow);\n}\n\n/********** Menu **********/\n\n.suey-keep-open {\n    /* keeps menu open on click, handled in Menu */\n}\n\n/********** Mouse Cursor **********/\n\n.suey-cursor-override {\n    /** global cursor override */\n}\n\n.suey-cursor-override * {\n    cursor: inherit !important;\n}\n\n/********** Tree List **********/\n\n.suey-no-select {\n    /* disables tree list option, handled in Tree List */\n}\n";
var stylesheet="/********** Disabled **********/\n\n.suey-hidden {\n    display: none !important;\n    pointer-events: none !important;\n}\n\n/** Grayscale filter for disabled items */\n.suey-disabled {\n    filter: contrast(75%) grayscale(100%) !important;\n    opacity: 0.7 !important;\n    cursor: default !important;\n    /* pointer-events: none !important; */\n}\n\n/** Element becomes 'unselectable', https://developer.mozilla.org/en-US/docs/Web/CSS/user-select */\n.suey-unselectable {\n    user-select: none;\n}\n\n/********** Coloring **********/\n\n.suey-icon-colorize /* aqua */ {\n    filter: brightness(65%) sepia(1000%) saturate(1000%) hue-rotate(calc(var(--rotate-hue) + 160deg));\n}\n\n.suey-complement-colorize /* orange */ {\n    filter: brightness(65%) sepia(1000%) saturate(1000%) hue-rotate(calc(var(--rotate-hue) + 0deg));\n}\n\n.suey-match-scheme {\n    filter: saturate(125%) hue-rotate(var(--rotate-hue));\n}\n\n.suey-match-complement {\n    filter: saturate(125%) hue-rotate(calc(var(--rotate-hue) + 180deg));\n}\n\n.suey-black-or-white {\n    filter: brightness(calc(1 * var(--bright)));\n}\n\n.suey-black-or-white.suey-highlight {\n    filter: brightness(calc((2 * var(--bright)) + 0.35));\n}\n\n.suey-black-or-white.suey-drop-shadow {\n    filter: brightness(calc(10 * var(--bright))) var(--drop-shadow);\n}\n\n/********** Menu **********/\n\n.suey-keep-open {\n    /* keeps menu open on click, handled in Menu */\n}\n\n/********** Mouse Cursor **********/\n\n.suey-cursor-override {\n    /** global cursor override */\n}\n\n.suey-cursor-override * {\n    cursor: inherit !important;\n}\n\n/********** Tree List **********/\n\n.suey-no-select {\n    /* disables tree list option, handled in Tree List */\n}\n";
styleInject(css_248z);

export { BACKGROUNDS, BUTTON_TYPES, CLOSE_SIDES, CORNER_BUTTONS, CURSOR_ROTATE, ColorScheme, ColorizeFilter, Css, DOCK_SIDES, Dom, Element, GRAPH_GRID_TYPES, GRAPH_LINE_TYPES, GRID_SIZE, IMAGE_ADD, IMAGE_CHECK, IMAGE_CLOSE, IMAGE_EMPTY, IMAGE_ERROR, IMAGE_EXPAND, IMAGE_INFO, IMAGE_QUESTION, IMAGE_WARNING, Iris, Key, LEFT_SPACING, MOUSE_CLICK, MOUSE_SLOP_LARGE, MOUSE_SLOP_SMALL, NODE_TYPES, PANEL_STYLES, Pointer, QUESTION_COLORS, QUESTION_ICONS, RESIZERS, Scene$1 as Scene, TAB_SIDES, THEMES, TOOLTIP_Y_OFFSET, TRAIT };
