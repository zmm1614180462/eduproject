<template>
  <div class="cal-wrapper">
    <div class="cal-header">
      <div class="l" @click="preMonth"><div class="arrow-left icon">&nbsp</div></div>
      <div style="font-size:18px;" class="title">{{curYearMonth}}</div>
      <div class="r" @click="nextMonth"><div class="arrow-right icon">&nbsp</div></div>
    </div>
    <div class="cal-body">
      <div class="weeks">
        <span
          v-for="(dayName, dayIndex) in i18n[calendar.options.locale].dayNames"
          class="item"
          :key="dayIndex"
          >
          {{i18n[calendar.options.locale].dayNames[(dayIndex + calendar.options.weekStartOn) % 7]}}
        </span>
      </div>
      <div class="dates" >
        <div v-for="date in dayList" id="dt-item" class="item dt-item"
          :class="[{
            today: date.status ? (today == date.date) : false,
            event: date.status ? (date.title != undefined) : false,
            [calendar.options.className] : (date.date == selectedDay)
          }, ...date.customClass]"
          :key="date.date"
          >
          <p class="date-num dt-num"
            @click="handleChangeCurday(date)"
            :style="{color: colorpick(date),backgroundColor:bgpick(date)}">

              {{date.status ? date.date.split('/')[2] : '&nbsp'}}

            </p>
            <!-- <p v-if="date.status ? (today == date.date) : false"  class="date-num dt-num"
            @click="handleChangeCurday(date)"
            :style="{color: date.title != undefined ? ((date.date == selectedDay) ? 'rgb(155,155,155)' : customColor) : 'rgb(155,155,155)'}">

              {{date.status ? date.date.split('/')[2] : '&nbsp'}}

            </p> -->

          <!-- <span style="width:20px;height:20px;top:0;" v-if="date.status ? (today == date.date) : false" class="is-today" :style="{backgroundColor: customColor }" ></span> -->
          <span v-if="date.status ? (date.title != undefined) : false" class="is-event"
            :style="{borderColor: customColor, backgroundColor: (date.date == selectedDay) ? customColor : 'inherit'}"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import i18n from '../i18n.js'
import { dateTimeFormatter, isEqualDateStr} from '../tools.js'

const inBrowser = typeof window !== 'undefined'
export default {
  name: 'cal-panel',
  data () {
    return {
      i18n
    }
  },
  props: {
    events: {
      type: Array,
      required: true
    },
    calendar: {
      type: Object,
      required: true
    },
    selectedDay: {
      type: String,
      required: false
    }
  },
  computed: {
    dayList () {
      let firstDay = new Date(this.calendar.params.curYear, this.calendar.params.curMonth, 1)
      let dayOfWeek = firstDay.getDay()
      // 根据当前日期计算偏移量 // Calculate the offset based on the current date
      if (this.calendar.options.weekStartOn > dayOfWeek) {
        dayOfWeek = dayOfWeek - this.calendar.options.weekStartOn + 7
      } else if (this.calendar.options.weekStartOn < dayOfWeek) {
        dayOfWeek = dayOfWeek - this.calendar.options.weekStartOn
      }

      let startDate = new Date(firstDay)
      startDate.setDate(firstDay.getDate() - dayOfWeek)

      let item, status, tempArr = [], tempItem
      for (let i = 0 ; i < 42 ; i++) {
          item = new Date(startDate);
          item.setDate(startDate.getDate() + i);

          if (this.calendar.params.curMonth === item.getMonth()) {
            status = 1
          } else {
            status = 0
          }
          tempItem = {
            date: `${item.getFullYear()}/${item.getMonth()+1}/${item.getDate()}`,
            status: status,
            customClass: []
          }
          this.events.forEach((event) => {
            if (isEqualDateStr(event.date, tempItem.date)) {
              tempItem.title = event.title
              tempItem.desc = event.desc || ''
              if (event.customClass) tempItem.customClass.push(event.customClass)
            }
          })
          tempArr.push(tempItem)
      }
      return tempArr
    },
    today () {
      let dateObj = new Date()
      return `${dateObj.getFullYear()}/${dateObj.getMonth()+1}/${dateObj.getDate()}`
    },
    curYearMonth () {
      let tempDate = Date.parse(new Date(`${this.calendar.params.curYear}/${this.calendar.params.curMonth+1}/01`))
      return dateTimeFormatter(tempDate, this.i18n[this.calendar.options.locale].format)
    },
    customColor () {
      return this.calendar.options.color
    },


  },
  methods: {
    nextMonth () {
      this.$EventCalendar.nextMonth()
      this.$emit('month-changed', this.curYearMonth)
    },
    preMonth () {
      this.$EventCalendar.preMonth()
      this.$emit('month-changed', this.curYearMonth)
    },
    handleChangeCurday (date) {
      if (date.status) {
        this.$emit('cur-day-changed', date.date)
      }else{
        this.$emit('cur-day-changed', date.date)
        console.log("ceshi ")
      }
    },
    colorpick(date){
      let retd = date.title != undefined ? ((date.date == this.selectedDay) ? 'rgb(216,216,216)' : this.customColor) : 'rgb(216,216,216)';
      if(new Date(date.date)<=new Date(this.today)){
          retd = "rgb(155,155,155)"
      }
       if(this.today==date.date){
         return 'white'
       }
      return retd;
    },
     bgpick(date){
       if(this.today==date.date){
         if(date.status){
          return "#00c184"
         }else{
           return "#fff"
         }
       }else{
         return "#fff"
       }
    }
  }
}
</script>
<style lang="less">
#dt-item{
  display: flex;
  justify-content: center;
   align-items: center;
   height: 47px;
  .dt-num{
    width: 25px;
    height: 25px;
   // background: red;
    border-radius: 50%;
    line-height: 25px;
  }

}
</style>

