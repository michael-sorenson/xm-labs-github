var githubRequest = http.request({
    'endpoint': 'GitHub',
    'path': '/repos/' + input["Username"] + '/' + input["Repository"] + '/commits/master',
    'method': 'GET',
});
var githubResponse = githubRequest.write();

var gcommit = JSON.parse(githubResponse.body);
console.log(JSON.stringify(gcommit.commit));

output['GH_Repo'] = gcommit.commit.url;
output['GH_Display_id'] = gcommit.sha;
output['GH_Author_Name'] = gcommit.commit.committer.name;
output['GH_Author_email'] = gcommit.commit.committer.email;
output['GH_Timestamp'] = gcommit.commit.committer.date;
output['GH_Message'] = gcommit.commit.message;