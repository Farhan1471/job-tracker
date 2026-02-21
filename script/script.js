let interviewList = [];
let rejectedList = [];

let totalCardCount = document.getElementById('totalCount');
let interviewCardCount = document.getElementById('interviewCount');
let rejectedCardCount = document.getElementById('rejectedCount');
let availableJobsCount = document.getElementById('availableJobs');

const sectionCardCount = document.getElementById('cardCount');
const mainContainer = document.querySelector('main');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');

function countCalculator(){
    totalCardCount.innerText = sectionCardCount.children.length;
    availableJobsCount.innerText = sectionCardCount.children.length;
    interviewCardCount.innerText = interviewList.length;
    rejectedCardCount.innerText = rejectedList.length;
}

countCalculator()


function toggleButtonStyle(id){
    allFilterBtn.classList.add('bg-[#FFFFFF]', 'text-[#64748B]');
    interviewFilterBtn.classList.add('bg-[#FFFFFF]', 'text-[#64748B]');
    rejectedFilterBtn.classList.add('bg-[#FFFFFF]', 'text-[#64748B]');

    allFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    interviewFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');
    rejectedFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');

    const selectedBtn = document.getElementById(id);
    selectedBtn.classList.remove('bg-[#FFFFFF]', 'text-[#64748B]');
    selectedBtn.classList.add('bg-[#3B82F6]', 'text-white');
}

mainContainer.addEventListener('click', function(event){
    const card = event.target.parentNode.parentNode;
    // console.log(card.querySelector('.companyName').innerText);

    const companyNameData = card.querySelector('.companyName').innerText;
    const jobPositionData = card.querySelector('.jobPosition').innerText;
    // const jobInfoData = card.querySelector('.jobInfo').innerText;
    // const statusData = card.querySelector('.status').innerText;
    // const jobDetailsData = card.querySelector('.jobDetails').innerText;
    // const btnInterviewData = card.querySelector('.btnInterview').innerText;
    // const btnRejectedData = card.querySelector('.btnRejected').innerText;

    // const cardInfo = {
    //     companyNameData,
    //     jobPositionData,
    //     jobInfoData,
    //     statusData,
    //     jobDetailsData,
    //     btnInterviewData,
    //     btnRejectedData
    // }

    console.log(companyNameData, jobPositionData)
})