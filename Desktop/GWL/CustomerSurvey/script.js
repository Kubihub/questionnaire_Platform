document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('surveyForm').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Survey submitted successfully!');
    });
});

function toggleQuestions(isFieldWorker) {
    document.getElementById('fieldQuestions').style.display = isFieldWorker ? 'block' : 'none';
    document.getElementById('nonFieldQuestions').style.display = isFieldWorker ? 'none' : 'block';
}

function toggleQuestions2(isFieldWorker2){
    document.getElementById("fieldQustions2").style.display = isFieldWorker2 ? 'block1' : 'none1';
    document.getElementById("nonfieldQustions2").style.display = isFieldWorker2 ? 'none1' : 'block1';
}

let currentPage = 1;

        function showPage(page) {
            document.querySelectorAll('.page').forEach(p => p.classList.add(''));
            document.getElementById(`page${page}`).classList.remove('');
            document.getElementById('submitBtn').classList.toggle('', page !== 4);
            document.querySelectorAll('.page').forEach(p => p.classList.add(''));
            document.getElementById(`page${page}`).classList.remove('');
        }

        function nextPage(page) {
            showPage(page);
        }

        function prevPage(page) {
            showPage(page);
        }

        document.addEventListener("DOMContentLoaded", function() {
            showPage(currentPage);
            document.getElementById('surveyForm').addEventListener('submit', function(event) {
                event.preventDefault();
                alert('Survey submitted successfully!');
            });
        });