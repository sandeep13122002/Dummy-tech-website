#include <iostream>
#include<vector>
#include<algorithm>
#include <bits/stdc++.h>

using namespace std;

int main() {
	// your code goes here
	int t;
	cin>>t;
	for(int i=0;i<t;i++){
	int n;
	cin>>n;
	int arr[n][n];

	for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
           cin>>arr[i][j];



        }

}
    unordered_set<int>s;


	for(int i=0;i<n;i++){
        for(int j=0;j<n;j++){
           s.insert(arr[j][i]);



        }
}
for(auto &i:s){
    cout<<i<<" ";
}
cout<<endl;


	}
	return 0;
}