function digitalClock(num) {
    let hour=parseInt(num/3600);
    num%=3600;
    let mins=parseInt(num/60);
    let secs=(num%60);
    if(hour>=24){hour-=24;}
    if(hour<10){hour="0"+hour;}
    if(mins<10){mins="0"+mins}
    if(secs<10){secs="0"+secs}
    return (hour+":"+mins+":"+secs)
}
console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(87000));