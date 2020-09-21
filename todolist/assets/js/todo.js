var todos = [];

$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

$("ul").on("click", "span", function (event) {
    var todoText = $(this).parent().text().trim();
    var index = todos.indexOf(todoText);
    if (index !== -1) {
        todos.splice(index, 1);
    }
    saveTodos();

    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();

});
$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {

        var todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fa fa-minus-circle'></i></span> " + todoText + "</li>")
        todos.push(todoText);
        saveTodos();
    }
});
$(".fa-plus-square").click(function () {
    $("input[type='text']").fadeToggle();
});


function saveTodos() {
    var storedList = JSON.stringify(todos);
    localStorage.setItem("todoList", storedList);
}


function getTodos() {
    if (localStorage.getItem("todoList") !== null) {
        todos = JSON.parse(localStorage.getItem("todoList"));
    }
}

getTodos();

todos.forEach(function (todoText) {
    $("ul").append("<li><span><i class='fa fa-minus-circle'></i></span> " + todoText + "</li>")
});

$(".fa-trash").click(function () {
    localStorage.clear();
    location.reload(true);
    console.log = null;
});