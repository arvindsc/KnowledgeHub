var foo = "bar";

function bar() {
	var foo = "baz";
}

function baz(foo){
	foo='bam';
	bam='yay';
}
/*
We defered the compilation of the functions and we compile it just in time 
------------------
--Compilation Phase:
------------------
	@line:3 Hey Scope of bar, I have a new declaration to declare and his identifier name is 'foo'.(comm between Compiler<-->Scope 		Manager)

	@Line:6 Back to the Global scope

	@Line:7 Hey Scope of bar, I have a new declaration to declare and his identifier name is 'foo'.
	its a functional declariation and add him to your declariation list for global scope.

	@Line:8 Hey Global Scope, I have a  functional declariation and his identifier name is baz add him to your declariation list.
	Hey Scope of baz, I have a new declaration for a variable and his identifier name is 'foo'.
	All the var keywords are removed in compilation phase.
------------------
--Execution Phase:
------------------
	LHS:left hand side of the assignment  OR LHS is the target
	RHS:Right hand side of the assignment OR RHS is the source
	
	@Line:1 foo is an LHS reference and "bar" is a RHS reference. 
		Compiler: Hey X Scope I have a LHS reference of a variable called 'FOO', have you ever heard of him.
		Scope Manager: Yes I have heard of him, It is the variable 'foo' that you declared micro secound back
	
	
		
*/
