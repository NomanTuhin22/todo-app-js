const form = document.querySelector('form');
const btn = document.querySelector('#btn');
const new_task = document.querySelector('#new_task');

const incopleteTasks = document.querySelector('#incopleteTasks');
const completedTask = document.querySelector('#completedTask p');


 let createTask = function(task) {
    let listItem = document.createElement('p');
    let checkBox = document.createElement('input');
    let label = document.createElement('label');

    label.innerText = task;
    checkBox.type = 'checkbox';
 }