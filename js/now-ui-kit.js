function giai_pt_bac_nhat(a, b)
{
    if (a == 0 && b == 0){
        alert('Phuong trình vô so nghiem');
    }
    else if (a != 0 && b == 0){
        alert('Phuong trình có nghiem x = 0');
    }
    else if (a == 0 && b != 0){
        alert("Phuong trình vô nghiem");
    }
    else {
        alert('Phuong trình có nghiem x = ' + (-b/a));
    }
}

giai_pt_bac_nhat(1,0);
