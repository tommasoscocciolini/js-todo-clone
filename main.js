$(document).ready(function () {

  var addBtn = $("#add");
  addBtn.click(function(){
    // console.log("ok");
    var newtitle = $("#titoloToDo").val();
    $("#titoloToDo").val("");

    var template = $("#todo li").clone();
    template.children('span.titolo').text(newtitle)

    template.children('span.done').click(function(){
      $(this).parent().remove();
    });

    template.children('span.edit').click(function(){
      var titoloDOM = $(this).siblings('span.titolo');
      var titolo = titoloDOM.text();
      titoloDOM.hide();

      $(this).siblings('input').val(titolo).show();
    });

    template.children('input').keyup(function(e){
      if (e.which == 13) {
        var titolo = $(this).val();
        $(this).hide();
        $(this).siblings('span.titolo').text(titolo).show();
      }
    })


    $("#toDoList").append(template);
  })

  $("#titoloToDo").keyup(function(e){
    if (e.which == 13) {
      var newtitle = $("#titoloToDo").val();
      $("#titoloToDo").val("");

      var template = $("#todo li").clone();
      template.children('span.titolo').text(newtitle)

      template.children('span.done').click(function(){
        $(this).parent().remove();
      });

      template.children('span.edit').click(function(){
        var titoloDOM = $(this).siblings('span.titolo');
        var titolo = titoloDOM.text();
        titoloDOM.hide();

        $(this).siblings('input').val(titolo).show();
      });

      template.children('input').keyup(function(e){
        if (e.which == 13) {
          var titolo = $(this).val();
          $(this).hide();
          $(this).siblings('span.titolo').text(titolo).show();
        }
      })

      $("#toDoList").append(template);
    }

  })

  })

  
