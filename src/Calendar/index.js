import '../../style/calendar.scss'
export default class Calendar {
  today
  curMonth
  curYear
  firstDay
  lastDay
  firstDayOfWeek
  id = '#my-calendar'

  constructor(id) {
    if (id) {
      this.id = id
    }
    const curDate = new Date()
    this.curMonth = curDate.getMonth()
    this.curYear = curDate.getFullYear()
    this.init(this.curMonth, this.curYear)
    this.bindEvent()
  }

  init(m, y) {
    this.curMonth = m
    this.curYear = y
    this.firstDayOfWeek = this.getFirstDayOfWeek(this.curYear, this.curMonth)
    this.lastDay = this.getlastDay(this.curYear, this.curMonth)
    this.render()
  }

  getToday() {
    this.today = new Date().getDate()
  }


  setCurMonth(month) {
    this.curMonth = month
  }

  getFirstDayOfWeek(year, month) {
    return new Date(year, month, 1).getDay()
  }

  getFirstDay() {
    return new Date(year, month, 1).getDate()
  }
  getlastDay(y, m) {
    return new Date(y, m+1, 0).getDate(); 
  }

  fillStartPosition(blankNum) {
    const frag = new DocumentFragment()
    for(let i=0; i<blankNum; i++) {
      frag.append(document.createElement('li'))
    }
    return frag
  }

  renderHead () {
    document.querySelector('.head>.left').innerHTML= `${this.curYear}年${this.curMonth+1}月`
  }

  render() {
    const frag = this.fillStartPosition(this.firstDayOfWeek)
    for(let d=1; d<=this.lastDay; d++) {
      const dayEl = document.createElement('li')
      dayEl.innerText = d
      frag.append(dayEl)
    }
    const container = document.querySelector(this.id)
    container.innerHTML = ''
    container.appendChild(frag)
    this.renderHead()
  }

  preMonth() {
    this.init(this.curMonth -1, this.curYear)
  }
  nextMonth() {
    this.init(this.curMonth +1, this.curYear)
  }

  bindEvent () {
    const preBtn = document.querySelector('.tiny-calendar .head .right .pre')
    const nextBtn = document.querySelector('.tiny-calendar .head .right .next')

    preBtn.addEventListener('click', () => {
      this.init(this.curMonth -1, this.curYear)
    })
    nextBtn.addEventListener('click', () => {
      this.init(this.curMonth +1, this.curYear)
    })
  }
}