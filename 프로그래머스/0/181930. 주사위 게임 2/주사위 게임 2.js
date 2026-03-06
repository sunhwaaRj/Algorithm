function solution(a, b, c){
	var s1 = a+b+c;
	var s2 = a*a+b*b+c*c;
	var s3 = a*a*a+b*b*b+c*c*c;
	
	return (a==b ? (a==c ? s1*s2*s3 : s1*s2) : (a==c ? s1*s2 : (b==c ? s1*s2: s1) ))
}
