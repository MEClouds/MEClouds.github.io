// today toyota in sudan hyundai

var mList = {
  Toyota : ['Corolla', 'Camry', 'Yaris', 'Prado', 'Land Cruiser','Hilux','Fortuner','Hiace','RAV4','Rush'],
  Hyundai :  ['Elantra', 'Tucson', 'Accent', 'Sonata','Santa Fe','Atos','Grand i10','i10','i20','i30','i40','Kona','Verna'],
  Kia :  ['Sportage', 'Optima', 'Cerato', 'Rio', 'Sorento', 'Picanto'],
  Mitsubishi :  ['Pajero', 'Lancer', 'L200', 'L300', 'Outlander', 'ASX']
};

el_parent = document.getElementById("parent_select");
el_child = document.getElementById("child_select");

// if(fuleType != null) {   
//          document.write("Radio button is selected"); 
//         fuleTypeValue=fuleType.value }
// else {  
//          document.write("Nothing has been selected");  
//  }


for (key in mList) {
  el_parent.innerHTML = el_parent.innerHTML + '<option>'+ key +'</option>';
}

el_parent.addEventListener('change', function populate_child(e){
  el_child.innerHTML = '';
  itm = e.target.value;
  if(itm in mList){
          for (i = 0; i < mList[itm].length; i++) {
              el_child.innerHTML = el_child.innerHTML + '<option>'+ mList[itm][i] +'</option>';
          }
  }

 
});



var findlink = document.getElementById("myLinkId");
		
    findlink.onclick=()=>{
      var message = document.getElementById("message").value
      var year=document.getElementById("year")
      var fuleType = document.querySelector( 'input[name="fule-type"]:checked');   
      var transType = document.querySelector( 'input[name="trans-type"]:checked');
      var customerType = document.querySelector( 'input[name="customer-type"]:checked');
      var name=document.getElementById("customer-name")
      var phone=document.getElementById("phone")
      var budget=document.getElementById("budget")
      const line="%0A"
      const line2="%23%23%23%23%23%23%23%23%23%23%23%23%23%23%23%0A"
      ms=encodeURIComponent(message)
      findlink.href = "https://wa.me/249912373262?text="+
      el_parent.value +line
      +el_child.value +line
      +year.value +line
      +"الوقود :"
      +fuleType.value +line
      +" ناقل الحركة :"
      +transType.value +line
      +"اسم  العميل :"
      +name.value +line

      +customerType.value +line
      +"رقم التواصل"
      +phone.value+line
      +"ميزانية العميل :"
      +budget.value +"%24"+line
      +ms +line
      +line2+" %C2%A9 دلالة الخرطوم "
      ;

      console.log(el_parent.value)
      console.log(el_child.value)
    }


function sendWa(){
      var message = document.getElementById("message").value
      ms=encodeURIComponent(message)
      url = "https://wa.me/249912373262?text=" + ms

      window.open(url)
      //location.href = "https://wa.me/249908443090?text=" + message
  }