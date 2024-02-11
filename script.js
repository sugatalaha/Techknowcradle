function validate(event)
{
    event.preventDefault();
    password=document.getElementById('password1').value;
    confirmPassword=document.getElementById('password2').value;
    if(password=='')
    {
        alert('Password field cannot be empty!');
    }
    else
    {
        if(password!=confirmPassword)
        {
            alert('Password does not match confirm password');
        }
    }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function popupform()
{   
    let form=document.getElementsByClassName('registration')[0];
    if(form.style.display=='block')
    {
        form.style.display='none';
    }
    else
    {
        form.style.display='block';
    }
}

function dropdowncall(x)
{
    x.classList.toggle('change');
    let list=document.getElementsByClassName('lists')[0];
    if(list.style.display=='block')
    {
        list.style.display='none';
    }
    else
    {
        list.style.display='block';
    }
}