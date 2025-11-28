    let tasks=[
        {
            "title":"قراءة كتاب",
            "Date":"31/10/2025",
            "isDone":false
            },
            {
            "title":"جافا سكريبت كورس",
            "Date":"31/10/2025",
            "isDone":false
            },
            {
            "title":"انهاء المشروع النهائي ",
            "Date":"4/10/2025",
            "isDone":false
            },
                {
            "title":"تمرين رياضي ",
            "Date":"16/10/2025",
            "isDone":false
            }

    ];
    function getTasksFromStorage(){
        let retrievedTasks=JSON.parse(localStorage.getItem("tasks"))
    tasks=retrievedTasks ?? []

    }
    getTasksFromStorage();
    function fillTasksOnThePage(){

    document.getElementById("tasks").innerHTML=""
    let index=0;
        for (task  of tasks) {
            
            let content=
            `<div class="task ${task.isDone ?"done":""}">
                    <!-- task info  start-->
                    <div class="info">
                        <h2>${task.title}</h2>
                        <div>
                        <i class="fa-solid fa-calendar-days"></i>

                        <span> ${task.Date} </span>
                        </div>
                    </div>
                    <!-- task info  end-->
                    <!-- task action start -->
                    <div class="action-task">
                        <button onclick="deleteTask(${index})"
                        class="circular"
                        id="btn-action"
                        style="background-color: rgb(114,0,0); color: white"
                        >
                        <i class="fa-solid fa-trash"></i>
                        </button>
                        ${task.isDone ?`<button onclick="toggleTaskCompletion(${index})"
                        class="circular"
                        id="btn-action"
                        style="background-color: rgba(218, 20, 36, 1)"
                        >
                       <i class="fa-solid fa-xmark"></i>
                        </button>`:`<button onclick="toggleTaskCompletion(${index})"
                        class="circular"
                        id="btn-action"
                        style="background-color: rgb(0,150,30)"
                        >
                        <i class="fa-solid fa-check"></i>
                        </button>`}
                        
                        <button onclick="updateTask(${index})"
                        class="circular"
                        id="btn-action"
                        style="background-color: blue"
                        >
                        <i class="fa-solid fa-pen"></i>
                        </button>
                    </div>
                    <!-- task action end -->
                    </div>`

        document.getElementById("tasks").innerHTML+=content;
        index++;
    
        }}
    fillTasksOnThePage()
        document.getElementById("add-btn").addEventListener("click",()=>{
        let now=new Date();
        let date=now.getDate()+"/"+(now.getMonth()+1)+"/"+now.getFullYear()
            let taskName=prompt("الرجاء ادخال عنوان المهمة")
        let task={
            "title":taskName,
            "Date":date,
            "isDone":false
        }
        tasks.push(task)
        storTasks()

        fillTasksOnThePage()
        })
        function deleteTask(index){
            let task=tasks[index].title;
           let isconfirm= confirm(`هل متأكد من حذف ${task}؟`)
            if(isconfirm){
           tasks.splice(index,1);
           storTasks()
           fillTasksOnThePage()}
        }
            function updateTask(index){
                let task=tasks[index];
            let newTaskTitle=prompt("الرجاء ادخال عنوان المهمة الجديدة :",task.title)
            
            task.title=newTaskTitle;
              storTasks()
                fillTasksOnThePage()
            }
        function toggleTaskCompletion(index){
           let task=tasks[index];
            task.isDone=!task.isDone
             storTasks()
            fillTasksOnThePage()

        }
        // storage function
            function storTasks(){
                    let tasksString=JSON.stringify(tasks)
            localStorage.setItem("tasks",tasksString)
            }



        
