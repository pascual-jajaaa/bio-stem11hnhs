const survey = new Survey.Model(json);
survey.applyTheme(themeJson);
survey.onComplete.add((sender, options) => {
    const surveyData = sender.data;

    // Append userData to user.json
    $.ajax({
        url: './user.json',
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            data.push(surveyData);
            $.ajax({
                url: './user.json',
                type: 'POST',
                contentType: 'application/json',
                data: JSON.stringify(data),
                success: function() {
                    console.log('User data saved successfully.');
                }
            });
        }
    });

    console.log(JSON.stringify(sender.data, null, 3));
});
$("#surveyElement").Survey({ model: survey });
