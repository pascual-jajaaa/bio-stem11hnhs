const survey = new Survey.Model(json);
survey.applyTheme(themeJson);
survey.onComplete.add((sender, options) => {
    console.log(JSON.stringify(sender.data, null, 3));
});
$("#surveyElement").Survey({ model: survey });

const surveyResults = [{
    "satisfaction-score": 5,
    "nps-score": 10
}, {
    "satisfaction-score": 5,
    "nps-score": 9
}, {
    "satisfaction-score": 3,
    "nps-score": 6
}, {
    "satisfaction-score": 3,
    "nps-score": 6
}, {
    "satisfaction-score": 2,
    "nps-score": 3
}];

const vizPanelOptions = {
    allowHideQuestions: false
}

Survey.slk(
    "OWQyYzczMzktMWI5NS00OTMxLWE0YjgtMDRhMGY0NzZhOWZhJmRvbWFpbnM6c3VydmV5anMuaW8sc3VydmV5anN0ZXN0LmF6dXJld2Vic2l0ZXMubmV0OzE9MjIyNC0wMi0wOCwyPTIyMjQtMDItMDgsND0yMjI0LTAyLTA4"
);

const vizPanel = new SurveyAnalytics.VisualizationPanel(
    survey.getAllQuestions(),
    surveyResults,
    vizPanelOptions
);

document.addEventListener("DOMContentLoaded", function() {
    vizPanel.render(document.getElementById("surveyVizPanel"));
});