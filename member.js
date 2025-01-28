function skillsMember() {
    var skills = ['JavaScript', 'React', 'Node', 'CSS', 'HTML'];
    var skills = skills.map(function(skill) {
        return '<li>' + skill + '</li>';
    });
    return skills;
}