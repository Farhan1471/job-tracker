let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';

let totalCardCount = document.getElementById('totalCount');
let interviewCardCount = document.getElementById('interviewCount');
let rejectedCardCount = document.getElementById('rejectedCount');
let availableJobsCount = document.getElementById('availableJobs');

const sectionCardCount = document.getElementById('cardCount');
const mainContainer = document.querySelector('main');
const filteredJob = document.getElementById('filtered-job');
const nofilteredJob = document.getElementById('no-filtered-job');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');


function updateAvailableJobsCount() {
    if (currentStatus === 'all-filter-btn') {
        availableJobsCount.innerText = sectionCardCount.children.length;
    } 
    else if (currentStatus === 'interview-filter-btn') {
        availableJobsCount.innerText = interviewList.length;
    } 
    else if (currentStatus === 'rejected-filter-btn') {
        availableJobsCount.innerText = rejectedList.length;
    }
}


function countCalculator(){
    totalCardCount.innerText = sectionCardCount.children.length;
    // availableJobsCount.innerText = sectionCardCount.children.length;
    interviewCardCount.innerText = interviewList.length;
    rejectedCardCount.innerText = rejectedList.length;

    updateAvailableJobsCount();
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
    currentStatus = id;

    selectedBtn.classList.remove('bg-[#FFFFFF]', 'text-[#64748B]');
    selectedBtn.classList.add('bg-[#3B82F6]', 'text-white');

    if(id == 'interview-filter-btn'){
        sectionCardCount.classList.add('hidden');
        filteredJob.classList.remove('hidden');
        renderInterviewCard();
    }
    else if(id == 'all-filter-btn'){
        sectionCardCount.classList.remove('hidden');
        filteredJob.classList.add('hidden');
        nofilteredJob.classList.add('hidden');
    }
    else if(id == 'rejected-filter-btn'){
        sectionCardCount.classList.add('hidden');
        filteredJob.classList.remove('hidden');
        renderRejectedCard();
    }
    updateAvailableJobsCount();
}

mainContainer.addEventListener('click', function(event){
    // console.log(event.target.parentNode.parentNode);
    // console.log(event.target.classList.contains('btn-interview'))

    if(event.target.classList.contains('btn-interview')){
        const card = event.target.parentNode.parentNode;
        const companyName = card.querySelector('.companyName').innerText;
        const jobPosition = card.querySelector('.jobPosition').innerText;
        const jobInfo = card.querySelector('.jobInfo').innerText;
        const status = card.querySelector('.status').innerText;
        const jobDetails = card.querySelector('.jobDetails').innerText;

        card.querySelector('.status').innerText = 'Interview';

        const cardInfo = {
            companyName, 
            jobPosition, 
            jobInfo, 
            status: 'Interview', 
            jobDetails
        }
        // console.log(cardInfo);

        const jobExist = interviewList.find(item => item.companyName == cardInfo.companyName);
        if(!jobExist){
            interviewList.push(cardInfo);
        }
        // console.log(interviewList);
        rejectedList = rejectedList.filter(item=> item.companyName != cardInfo.companyName);

        if(currentStatus == 'rejected-filter-btn'){
            renderRejectedCard();
        }

        countCalculator();
        // renderInterviewCard();
    }
    else if(event.target.classList.contains('btn-rejected')){
        const card = event.target.parentNode.parentNode;
        const companyName = card.querySelector('.companyName').innerText;
        const jobPosition = card.querySelector('.jobPosition').innerText;
        const jobInfo = card.querySelector('.jobInfo').innerText;
        const status = card.querySelector('.status').innerText;
        const jobDetails = card.querySelector('.jobDetails').innerText;

        card.querySelector('.status').innerText = 'Rejected';

        const cardInfo = {
            companyName, 
            jobPosition, 
            jobInfo, 
            status: 'Rejected', 
            jobDetails
        }
        // console.log(cardInfo);

        const jobExist = rejectedList.find(item => item.companyName == cardInfo.companyName);
        if(!jobExist){
            rejectedList.push(cardInfo);
        }
        // console.log(interviewList);
        interviewList = interviewList.filter(item=> item.companyName != cardInfo.companyName);

        if(currentStatus == 'interview-filter-btn'){
            renderInterviewCard();
        }

        countCalculator();
        // renderRejectedCard();
    }
})


function renderInterviewCard(){
    filteredJob.innerHTML = '';

    if(interviewList.length === 0){
        nofilteredJob.classList.remove('hidden');
    }
    else{
        nofilteredJob.classList.add('hidden');
    }

    for(let interview of interviewList){
        console.log(interview);
        let div = document.createElement('div');
        div.className = 'card bg-[#FFFFFF] rounded-lg p-4';
        div.innerHTML = `
            <div>
                <div class="flex justify-between items-center">
                    <div>
                        <h2 class="companyName text-[#002C5C] text-lg font-bold">${interview.companyName}</h2>
                        <p class="jobPosition text-[#64748B]">${interview.jobPosition}</p>
                    </div>
                    <div class="w-10 h-10 border-2 border-gray-100 rounded-full flex justify-center items-center">
                        <i class="fa-regular fa-trash-can"></i>
                    </div>
                </div>
                <div>
                    <p class="jobInfo text-[#64748B] py-4">${interview.jobInfo}</p>
                </div>
                <div>
                    <button class="status bg-[#EEF4FF] text-[#002C5C] px-4 py-3 rounded-md font-semibold transform hover:scale-105">${interview.status}</button>
                    <p class="jobDetails py-2">${interview.jobDetails}</p>
                </div>
                <div class="py-4 flex gap-2">
                    <button class="btn-interview bg-[#FFFFFF] text-[#10B981] border-2 border-[#10B981] px-4 py-2 rounded-md font-semibold cursor-pointer hover:bg-[#10B981] hover:text-[#FFFFFF]">Interview</button>
                    <button class="btn-rejected bg-[#FFFFFF] text-[#EF4444] border-2 border-[#EF4444] px-4 py-2 rounded-md font-semibold cursor-pointer hover:bg-[#EF4444] hover:text-[#FFFFFF]">Rejected</button>
                </div>
            </div>
        `
        filteredJob.appendChild(div);
    }
}
function renderRejectedCard(){
    filteredJob.innerHTML = '';

    if(rejectedList.length === 0){
    nofilteredJob.classList.remove('hidden');
    }
    else{
        nofilteredJob.classList.add('hidden');
    }

    for(let rejected of rejectedList){
        // console.log(interview);
        let div = document.createElement('div');
        div.className = 'card bg-[#FFFFFF] rounded-lg p-4';
        div.innerHTML = `
            <div>
                <div class="flex justify-between items-center">
                    <div>
                        <h2 class="companyName text-[#002C5C] text-lg font-bold">${rejected.companyName}</h2>
                        <p class="jobPosition text-[#64748B]">${rejected.jobPosition}</p>
                    </div>
                    <div class="w-10 h-10 border-2 border-gray-100 rounded-full flex justify-center items-center">
                        <i class="fa-regular fa-trash-can"></i>
                    </div>
                </div>
                <div>
                    <p class="jobInfo text-[#64748B] py-4">${rejected.jobInfo}</p>
                </div>
                <div>
                    <button class="status bg-[#EEF4FF] text-[#002C5C] px-4 py-3 rounded-md font-semibold transform hover:scale-105">${rejected.status}</button>
                    <p class="jobDetails py-2">${rejected.jobDetails}</p>
                </div>
                <div class="py-4 flex gap-2">
                    <button class="btn-interview bg-[#FFFFFF] text-[#10B981] border-2 border-[#10B981] px-4 py-2 rounded-md font-semibold cursor-pointer hover:bg-[#10B981] hover:text-[#FFFFFF]">Interview</button>
                    <button class="btn-rejected bg-[#FFFFFF] text-[#EF4444] border-2 border-[#EF4444] px-4 py-2 rounded-md font-semibold cursor-pointer hover:bg-[#EF4444] hover:text-[#FFFFFF]">Rejected</button>
                </div>
            </div>
        `
        filteredJob.appendChild(div);
    }
}