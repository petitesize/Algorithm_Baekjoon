const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

const hour = input[0];
const minute = input[1];
const ALARM = 45;
const CLOCK_MINUTE = 60;

let alarm_hour = hour;
let alarm_minute = minute;

if (minute >= 45) {
  alarm_minute = minute - ALARM;
} else if (minute < 45) {
  let cal_minute = Math.abs(minute - ALARM);
  alarm_minute = CLOCK_MINUTE - cal_minute;
  if (alarm_hour >= 1) {
    alarm_hour -= 1;
  } else if (alarm_hour < 1) {
    alarm_hour = 23;
  }
}

console.log(alarm_hour, alarm_minute);
