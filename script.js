$(document).ready(function(){
	$("#sub").click(function(){
		var validate = true;
		var email = $("#email").val();
		var pass = $("#pass").val();
		var re_pass = $("#re_pass").val();
		var company = $("#company").val();
		var first_name = $("#first_name").val();
		var last_name = $("#last_name").val();
		var tel = $("#tel").val();
		// email
		if(email.trim() == '') {
			validate = false;
			$("email").next().text("Please input email");
		}
		// pass
		if(pass.trim() == ''){
			validate = false;
			$("#pass").next().text("Pleas input pass");
		} else {
			if(pass.trim().length < 6) {
				validate = false;
				$("#pass").next().text("Least 6 charater");
			} else if(pass.trim() != re_pass.trim()){
				validate = false;
				$("#pass").next().text("re_pass wrong");
			}
		}
		// company
		var valCheck = $("input[name='membership_type']:checked").val();
		if(company.trim() == '' && valCheck == 'on'){
			validate = false;
			$("#company").next().text("Please input company");
		}
		if(validate){
			$("#form_jQ").submit();
		} else return false;
	});
	$(":radio").change(function(){
		var check = $("input[value='off']").is(":checked");
		if(check){
			// disabled
			$("#company").attr("disabled", true);
			$("#company").next().text("");
			$("#company").val("");
		}
		else {
			// enable
			$("#company").attr("disabled", false);
			// add * 
			$("#company").next().text("*");
		}
	});

	$("#pass").change(function(){
		var pass = $("#pass").val().trim().length;
		if(pass < 6) $("#pass").next().text("Least 6 charater");
		else  $("#pass").next().text("");
	});

	changeAll();
})

function changeAll(){
	$("input").each(function(){
		$(this).focusout(function(){
		var val = $(this).val();
		if(val.trim() == '') 
			$(this).next().text("error");
		else  
			$(this).next().text("");
	})
	});	
}