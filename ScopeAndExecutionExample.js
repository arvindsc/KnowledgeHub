var foo = "bar"; //ln1
//ln2
function bar() { //ln3
		var foo = "baz"; //ln4
		//ln5
		function baz(foo) { //ln6
				foo = "bam"; //ln7
				bam = "yay"; //ln8
			} //ln9
		baz(); //ln10
	} //ln11
	//ln12
bar(); //ln13
foo; //ln14
bam; //ln15
baz(); //ln16

/*
---------Compilation----------
@ln1:  Hey Global scope I have a  declariation for a variable called foo
@ln3:  Hey Global scope I have a  declariation for a function called bar and I want to register him in the global scope.
        We need to recursive descendant and compile the function bar -->Scope of Bar
          @Line4: Hey Scope of 'bar', I have a  declariation for a variable called foo
          @Line6: Hey bar scope I have a  functional declariation called bar and I want to register him in the your scope
              @Line6: Hey bar scope I have a  declariation for a variable called foo and I want to register him in the your scope
          
---------Execution----------

@ln1: Question->Hey Global scope I have a  LHS reference for a variable called foo, ever herd of him?
        Answer  -> Yes, I have here you go. It gives reference back to variable.
@ln2 to @line 12 are in compiled form

@ln13: Hey Global scope I have a  RHS reference for a variable called bar, ever herd of him?
        Answer  -> Yes, I have here you go. It gives reference back to variable which is a function object
        @Line13 try to execute the return value due to '()';
        
@ln4: Hey scope bar I have a  LHS reference for a variable called foo, ever herd of him?
      Answer  -> Yes, I have here you go. It gives reference back to variable which is a function object
@ln6 to @line 9 are in compiled form

@ln10: Hey scope of bar I have a  RHS reference for a variable called baz, ever herd of him?
       Answer  -> Yes, I have and gives reference back to variable which is a function object. We execute that--Execution Engine will execute baz.
       @ln7: Question->Hey scope of baz I have a  LHS reference for a variable called foo, ever herd of him?-->return referenece back to the variable.
       @ln8: Question->Hey scope of baz I have a  LHS reference for a variable called 'bam', ever herd of him?
             Answer-> No, GO FISH! ---bar->'Question; Answer:No, GO FISH!'---global->'Question; Answer:Just made it for you'
             
@ln14: Hey Global scope I have a  RHS reference for a variable called foo, ever herd of him
       Answer: return 'bar'
      
@ln15: Hey Global scope I have a  RHS reference for a variable called bam, ever herd of him
       Answer: return 'yay'

@ln16: Hey Global scope I have a  RHS reference for a variable called baz, ever herd of him?
       Answer: No, ERROR, Not going to create a function declariation
     

*/