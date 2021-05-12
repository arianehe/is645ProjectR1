
$('#searchBtn').click((event) => {
  event.preventDefault();
  const cusid = $('#cusid').val()
  const cusfname = $('#cusfname').val() 
  const cuslname = $('#cuslname').val() 
  const cusstate = $('#cusstate').val() 
  const cussalesytd = $('#cussalesytd').val() 
  const cussalesprev = $('#cussalesprev').val()
  $.get(`api/customers?cusid=${cusid}&cusfname=${cusfname}&cuslname=${cuslname}&cusstate=${cusstate}&cussalesytd=${cussalesytd}&cussalesprev=${cussalesprev}`,(data,status) => {
    if(data !== []){
      $('#resultOut').show()
      data.forEach(element => {
        alert(`${element.cusid} : ${element.cusfname} : ${element.cuslname} : ${element.cusstate} : ${element.cussalesytd} : ${element.cussalesprev}`)

      });
    }
  }) 
})

$('#resultOut').hide()


