let str = `One: 'Hi Mary.' Two: 'Oh, hi.'
One: 'How are you doing?'
Two: 'I'm doing alright. How about you?'
    One: 'Not too bad. The weather is great isn't it?'
    Two: 'Yes. It's absolutely beautiful today.'
One: 'I wish it was like this more frequently.'
Two: 'Me too.'
One: 'So where are you going now?'
Two: 'I'm going to meet a friend of mine at the department store.'
One: 'Going to do a little shopping?'
Two: 'Yeah, I have to buy some presents for my parents.'
One: 'What's the occasion?'
    Two: 'It's their anniversary.'
One: 'That's great. Well, you better get going. You don't want to be late.'
Two: 'I'll see you next time.'
One: 'Sure. Bye.'`

console.log(str)

const regExp = /(\s)'|'(\s)|'$/g //^' в начале строки или (\s)' после пробела или '(\s) до пробела или '$ в конце строки g поиск по всему тексту. \s в скобках для группировки, чтобы сохранить перенос строки
console.log(str.replace(regExp, '$1"$2'))


const nameArea = document.getElementById('name')
const telArea = document.getElementById('tel')
const mailArea = document.getElementById('mail')

function check() {
    (nameArea.value.match(/[^a-zа-яё]/gi) !== null) ? nameArea.style = 'color: red; border-color: red': nameArea.style = 'color: black; border-color: black';

    (telArea.value.match(/^\+7\(\d{3}\)\d{3}-\d{4}$/) == null) ? telArea.style = 'color: red; border-color: red': telArea.style = 'color: black; border-color: black';

    (mailArea.value.match(/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-zа-я]{2,9}$/iu) == null) ? mailArea.style = 'color: red; border-color: red': mailArea.style = 'color: black; border-color: black';

}

document.querySelector('.contbutt').addEventListener('click', e => {
    e.preventDefault();
    check();
})