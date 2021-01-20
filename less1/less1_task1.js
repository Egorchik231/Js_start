alert('ALARM TASK_1')

let tempCelciuses;
tempCelciuses = prompt('enter temperature of Celciuses: ', '100');

alert(`${(9/5) * tempCelciuses + 32}`)

alert('ALARM TASK_2')


let admin
let name

name = 'Vasiliy'
admin = name

alert(`admin: ${admin}`)

alert('ALARM TASK_3')

alert(`${1000 + '108'}`)
alert('В итоге JS сконкатил два объекта как строки, так как к числу прибавить строку нельзя,' +
    ' поэтому число принял за строку, а строку прибавить к строке льзя! :)')

alert('ALARM TASK_4')

alert('При атрибуте defer скрипты будут выполняться в строго относительном порядке, а не по мере загрузки' +
    ' Также defer запускает скрипты только после того как вся html страница прорисуется, загрузиться, ' +
    'в то время как при async скрипты будут запущены даже если страница не прогружена до конца.')