// Define variables
let type;
let message;
let task;
let time;
let alertPlaceholder;
let plural;
let i;

// Function to add task cards upon submission    
function add_task() {

    alertPlaceholder = document.getElementById('TaskPlaceholder');

    task = String(document.getElementById("task").value);
    time = Number(document.getElementById("time").value);

    if(task == "" || time == "" || time == NaN || time < 1) {
        i = 0;
    }
    else {
        i = 1;
    }

    if(i == 1) {

        if(time < 3) {
            type = 'danger';
        }
        else if(time < 7) {
            type = 'warning';
        }
        else {
            type = 'dark';
        }
    

        console.log(task);
        console.log(time);

        if(time == 1) {
            plural = ' day';
        }
        else {
            plural = ' days';
        }

        let wrapper = document.createElement('div');
        wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible fade show" role="alert">' + task + '<br>' + time + plural + '<button type="button" class="btn-close" data-dismiss="alert" aria-label="Close"></button></div>';
    
        alertPlaceholder.append(wrapper);
    
    }
}

// Script to disable page refresh upon submission
let form = document.getElementById("form-field");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()