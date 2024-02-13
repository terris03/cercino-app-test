/** @type {HTMLInputElement} */ const di = document.querySelector("#datain")
/** @type {HTMLInputElement} */ const ts = document.querySelector("#time_start")
/** @type {HTMLInputElement} */ const te = document.querySelector("#time_end")
/** @type {HTMLParagraphElement} */ const out = document.querySelector("#out")
/** @type {HTMLDivElement} */ const button = document.querySelector("#button_buk")
di.addEventListener("input", fired_new)
ts.addEventListener("input", fired_new)
te.addEventListener("input", fired_new)
const intl_date = new Intl.DateTimeFormat("sv", { dateStyle: undefined, timeStyle: "medium", hour12: false, timeZone: "UTC" })
let buk = []
/**
 * @param {[String,()=>{}][]|null} arr
 */
function update_buttons(arr) {
	button.replaceChildren([])
	if (!arr) {
		for (let index = 0; index < buk.length; index++) {
			const element = buk[index]
			const but = document.createElement("button")
			but.textContent = "bucket_" + index
			but.onclick = () => {
				choose(element)
			}
			but.disabled=element.length===0
			button.appendChild(but)
			if (index !== buk.length - 1) {
				button.appendChild(document.createElement("br"))
			}
		}
	} else {
		const back_but = document.createElement("button")
		back_but.textContent = "back"
		back_but.onclick = () => {
			update_buttons(null)
		}
		button.appendChild(back_but)
		button.appendChild(document.createElement("br"))
		for (let index = 0; index < arr.length; index++) {
			const element = arr[index]
			const but = document.createElement("button")
			but.textContent = element[0]
			but.onclick = element[1]
			button.appendChild(but)
			if (index != arr.length - 1) {
				button.appendChild(document.createElement("br"))
			}
		}
	}
	render_p()
}
function render_p(){
	out.textContent = JSON.stringify(
		Object.fromEntries(
			buk.map((val, index) => {
				return [
					"bucket_" + index,
					val.map((val_) => {
						return intl_date.format(val_)
					}) /* `${intl_date.format(Math.min(...val))}-${intl_date.format(Math.max(...val))}` */,
				]
			})
		),
		null,
		4
	)
}
function fired_new() {
	buk = make_buckets(
		Array.from({ length: di.valueAsNumber }, (_, index) => {
			return index
		}),
		ts.valueAsDate,
		te.valueAsDate
	)
	update_buttons(null)
	render_p()
}
/**
 * @param {Array} elements
 */
function choose(elements) {
	const elems = elements.slice(0, 3)
	update_buttons(
		elems.map((_, index) => {
			return [
				intl_date.format(elements[index]),
				() => {
					elements.splice(index, 1)
					update_buttons(null)
				},
			]
		})
	)
}
function lerp(a, b, x) {
	return a + (b - a) * x
}
/**
 *
 * @param {String[]} data
 * @param {Date} ts
 * @param {Date} te
 */
function make_buckets(data, ts, te, bucket) {
	let arr = []
	let dts = ts
	let dte = te
	dte = new Date(Date.UTC(1970, 0, te <= ts ? 2 : 1, dte.getHours() - 1, dte.getMinutes(), dte.getSeconds(), dte.getMilliseconds()))
	for (let index = 0; index < data.length; index++) {
		const split = index / (data.length / 3)
		if (!(Math.floor(split) in arr)) {
			arr[Math.floor(split)] = []
		}
		const date = Math.round(lerp(dts.getTime(), dte.getTime(), index / (data.length - 1)))
		arr[Math.floor(split)].push(date /* [,element.toString().padStart(data.length.toString().length, "0")] */)
	}
	return arr
}
fired_new()
