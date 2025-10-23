const showMessage = (message, duration = 3000, isError = false) => {
            const messageBox = document.getElementById('messageBox');
            messageBox.textContent = message;
            messageBox.classList.remove('bg-blue-500', 'bg-red-500');
            messageBox.classList.add(isError ? 'bg-red-500' : 'bg-blue-500');
            messageBox.classList.add('show');
            setTimeout(() => {
                messageBox.classList.remove('show');
            }, duration);
        };
        // Lectures
        const subjects = [
            {
                name: "Human Computer Interaction",
                lectures: [
                    {
                        id: `lecture-1`,
                        name: `Lecture 1: Introduction to Human-Computer Interaction`,
                        podbeanUrl: `https://www.podbean.com/player-v2/?i=mu5mj-195813f-pb&from=pb6admin&share=0&download=0&rtl=0&fonts=Arial&skin=1b1b1b&font-color=ffffff&logo_link=episode_page&btn-skin=3267a3`,
                        quizUrl: `hciq1.html`
                    },
                    {
                        id: `lecture-2`,
                        name: `Lecture 2: Human`,
                        podbeanUrl: `https://www.podbean.com/player-v2/?i=mhak6-196f2d5-pb&from=pb6admin&share=0&download=0&rtl=0&fonts=Arial&skin=1b1b1b&font-color=auto&logo_link=episode_page&btn-skin=3267a3`,
                        quizUrl: `hciq2.html`
                    },
                    {
                        id: `lecture-3`,
                        name: `Lecture 3: Computer`,
                        podbeanUrl: `https://www.podbean.com/player-v2/?i=d42qj-19805f5-pb&from=pb6admin&share=0&download=0&rtl=0&fonts=Arial&skin=1b1b1b&font-color=auto&logo_link=episode_page&btn-skin=3267a3`,
                        quizUrl: `hciq3.html`
                    },
                    {
                        id: `lecture-4`,
                        name: `Lecture 4: Interaction`,
                        podbeanUrl: `https://www.podbean.com/player-v2/?i=fqmu4-19a0839-pb&from=pb6admin&share=0&download=0&rtl=0&fonts=Arial&skin=1b1b1b&font-color=auto&logo_link=episode_page&btn-skin=3267a3`,
                        quizUrl: `hciq4.html`
                    },
                    /*
                    ...Array.from({ length: 11 }, (_, i) => ({
                        id: `lecture-${i + 2}`,
                        name: `Lecture ${i + 2}: Calculus Fundamentals`,
                        podbeanUrl: "https://www.podbean.com/media/player/7u9h2-9g9k5?from=embed&skin=1&btn-skin=135&size=200&share=1&fonts=Inter&auto=0&download=1&rtl=0",
                        quizUrl: "https://www.qzzr.com/quiz/en/609a4d81-12c8-4a11-a8b2-38a3c898c6b7"
                    }))*/
                ]
            },
            {
                name: "E-commerce",
                lectures: [
                    {
                        id: `lecture-1`,
                        name: `Lecture 1: Introduction to E-Commerce (1)`,
                        podbeanUrl: `https://www.podbean.com/player-v2/?i=fpjgu-19633f7-pb&from=pb6admin&share=0&download=0&rtl=0&fonts=Arial&skin=1b1b1b&font-color=ffffff&logo_link=episode_page&btn-skin=3267a3`,
                        quizUrl: `ecq1.html`
                    },
                    {
                        id: `lecture-2`,
                        name: `Lecture 2: Introduction to E-Commerce (2)`,
                        podbeanUrl: `https://www.podbean.com/player-v2/?i=itriu-196f192-pb&from=pb6admin&share=0&download=0&rtl=0&fonts=Arial&skin=1b1b1b&font-color=ffffff&logo_link=episode_page&btn-skin=3267a3`,
                        quizUrl: `ecq2.html`
                    },
                    {
                        id: `lecture-3`,
                        name: `Lecture 3: E-commerce Business Models and Concept (1)`,
                        podbeanUrl: `https://www.podbean.com/player-v2/?i=wxbdr-196f233-pb&from=pb6admin&share=0&download=0&rtl=0&fonts=Arial&skin=1b1b1b&font-color=ffffff&logo_link=episode_page&btn-skin=3267a3`,
                        quizUrl: `ecq3.html`
                    },
                    {
                        id: `lecture-4`,
                        name: `Lecture 4: E-commerce Business Models and Concept (2)`,
                        podbeanUrl: `https://www.podbean.com/player-v2/?i=ptbie-196f249-pb&from=pb6admin&share=0&download=0&rtl=0&fonts=Arial&skin=1b1b1b&font-color=ffffff&logo_link=episode_page&btn-skin=3267a3`,
                        quizUrl: `ecq4.html`
                    },
                    /*
                    ...Array.from({ length: 11 }, (_, i) => ({
                        id: `lecture-${i + 2}`,
                        name: `Lecture ${i + 2}: Calculus Fundamentals`,
                        podbeanUrl: "https://www.podbean.com/media/player/7u9h2-9g9k5?from=embed&skin=1&btn-skin=135&size=200&share=1&fonts=Inter&auto=0&download=1&rtl=0",
                        quizUrl: "https://www.qzzr.com/quiz/en/609a4d81-12c8-4a11-a8b2-38a3c898c6b7"
                    }))*/
                ]
            },
            {
                name: "Data Mining",
                lectures: [
                    {
                        id: `lecture-1`,
                        name: `Lecture 1: Introduction`,
                        podbeanUrl: `https://www.podbean.com/player-v2/?i=wzc8n-19633fe-pb&from=pb6admin&share=0&download=0&rtl=0&fonts=Arial&skin=1b1b1b&font-color=ffffff&logo_link=episode_page&btn-skin=3267a3`,
                        quizUrl: `dmq1.html`
                    },
                    {
                        id: `lecture-2`,
                        name: `Lecture 2: Data Mining Process`,
                        podbeanUrl: `https://www.podbean.com/player-v2/?i=4qerx-19806e4-pb&from=pb6admin&share=0&download=0&rtl=0&fonts=Arial&skin=1b1b1b&font-color=auto&logo_link=episode_page&btn-skin=3267a3`,
                        quizUrl: `dmq2.html`
                    },
                    {
                        id: `lecture-3`,
                        name: `Lecture 3: Data Selection & Exploration`,
                        podbeanUrl: `https://www.podbean.com/player-v2/?i=9gtpu-19a0776-pb&from=pb6admin&share=0&download=0&rtl=0&fonts=Arial&skin=1b1b1b&font-color=auto&logo_link=episode_page&btn-skin=3267a3`,
                        quizUrl: `dmq3.html`
                    },
                    {
                        id: `lecture-4`,
                        name: `Lecture 4: Data Cleaning`,
                        podbeanUrl: `https://www.podbean.com/player-v2/?i=nqqne-19a0979-pb&from=pb6admin&share=0&download=0&rtl=0&fonts=Arial&skin=1b1b1b&font-color=auto&logo_link=episode_page&btn-skin=3267a3`,
                        quizUrl: `dmq4.html`
                    },
                    {
                        id: `lecture-5`,
                        name: `Lecture 5: Data Integration`,
                        podbeanUrl: `https://www.podbean.com/player-v2/?i=nzhvu-19a1047-pb&from=pb6admin&share=1&download=1&rtl=0&fonts=Arial&skin=1b1b1b&font-color=auto&logo_link=episode_page&btn-skin=3267a3`,
                        quizUrl: `dmq5.html`
                    },
                    /*
                    ...Array.from({ length: 11 }, (_, i) => ({
                        id: `lecture-${i + 2}`,
                        name: `Lecture ${i + 2}: Calculus Fundamentals`,
                        podbeanUrl: "https://www.podbean.com/media/player/7u9h2-9g9k5?from=embed&skin=1&btn-skin=135&size=200&share=1&fonts=Inter&auto=0&download=1&rtl=0",
                        quizUrl: "https://www.qzzr.com/quiz/en/609a4d81-12c8-4a11-a8b2-38a3c898c6b7"
                    }))*/
                ]
            },
            {
                name: "Networks Administration 2",
                lectures: [
                    {
                        id: `lecture-1`,
                        name: `Lecture 1: System Administration Overview`,
                        podbeanUrl: `https://www.podbean.com/player-v2/?i=7c26k-1963432-pb&from=pb6admin&share=0&download=0&rtl=0&fonts=Arial&skin=1b1b1b&font-color=ffffff&logo_link=episode_page&btn-skin=3267a3`,
                        quizUrl: `naq1.html`
                    },
                    {
                        id: `lecture-2`,
                        name: `Lecture 2: Booting and Shutting Down Linux`,
                        podbeanUrl: `https://www.podbean.com/player-v2/?i=gmigh-1970668-pb&from=pb6admin&share=0&download=0&rtl=0&fonts=Arial&skin=1b1b1b&font-color=ffffff&logo_link=episode_page&btn-skin=3267a3`,
                        quizUrl: `naq2.html`
                    },
                    {
                        id: `lecture-3`,
                        name: `Lecture 3: User Group Management`,
                        podbeanUrl: `https://www.podbean.com/player-v2/?i=ne5jt-1978750-pb&from=pb6admin&share=0&download=0&rtl=0&fonts=Arial&skin=1b1b1b&font-color=auto&logo_link=episode_page&btn-skin=3267a3`,
                        quizUrl: `naq3.html`
                    },
                    /*
                    ...Array.from({ length: 11 }, (_, i) => ({
                        id: `lecture-${i + 2}`,
                        name: `Lecture ${i + 2}: Calculus Fundamentals`,
                        podbeanUrl: "https://www.podbean.com/media/player/7u9h2-9g9k5?from=embed&skin=1&btn-skin=135&size=200&share=1&fonts=Inter&auto=0&download=1&rtl=0",
                        quizUrl: "https://www.qzzr.com/quiz/en/609a4d81-12c8-4a11-a8b2-38a3c898c6b7"
                    }))*/
                ]
            },
            {
                name: "Mobile Computing",
                lectures: [
                    {
                        id: `lecture-1`,
                        name: `Lecture 1: What is Mobile Computing`,
                        podbeanUrl: `https://www.podbean.com/player-v2/?i=svwjs-19634a3-pb&from=pb6admin&share=0&download=0&rtl=0&fonts=Arial&skin=1b1b1b&font-color=auto&logo_link=episode_page&btn-skin=3267a3`,
                        quizUrl: `mcq1.html`
                    },
                    {
                        id: `lecture-2`,
                        name: `Lecture 2:  Dimensions of mobility`,
                        podbeanUrl: `https://www.podbean.com/player-v2/?i=r8th7-1970629-pb&from=pb6admin&share=0&download=0&rtl=0&fonts=Arial&skin=1b1b1b&font-color=ffffff&logo_link=episode_page&btn-skin=3267a3`,
                        quizUrl: `mcq2.html`
                    },
                    {
                        id: `lecture-3`,
                        name: `Lecture 3: Condition Of The Mobile User`,
                        podbeanUrl: `https://www.podbean.com/player-v2/?i=he295-197878d-pb&from=pb6admin&share=0&download=0&rtl=0&fonts=Arial&skin=1b1b1b&font-color=auto&logo_link=episode_page&btn-skin=3267a3`,
                        quizUrl: `mcq3.html`
                    },
                    /*
                    ...Array.from({ length: 11 }, (_, i) => ({
                        id: `lecture-${i + 2}`,
                        name: `Lecture ${i + 2}: Calculus Fundamentals`,
                        podbeanUrl: "https://www.podbean.com/media/player/7u9h2-9g9k5?from=embed&skin=1&btn-skin=135&size=200&share=1&fonts=Inter&auto=0&download=1&rtl=0",
                        quizUrl: "https://www.qzzr.com/quiz/en/609a4d81-12c8-4a11-a8b2-38a3c898c6b7"
                    }))*/
                ]
            },
            {
                name: "قضايا مهنية وأخلاقية",
                lectures: [
                    {
                        id: `lecture-1`,
                        name: `Lecture 1: قضايا مهنية وأخلاقية`,
                        podbeanUrl: `https://www.podbean.com/player-v2/?i=kvtmh-196350c-pb&from=pb6admin&share=0&download=0&rtl=0&fonts=Arial&skin=1b1b1b&font-color=auto&logo_link=episode_page&btn-skin=3267a3`,
                        quizUrl: `pmiq1.html`
                    },
                    {
                        id: `lecture-2`,
                        name: `Lecture 2: المفاهيم والنظريات الأخلاقية`,
                        podbeanUrl: `https://www.podbean.com/player-v2/?i=zrhrn-1978757-pb&from=pb6admin&share=0&download=0&rtl=0&fonts=Arial&skin=1b1b1b&font-color=auto&logo_link=episode_page&btn-skin=3267a3`,
                        quizUrl: `pmiq2.html`
                    },
                    {
                        id: `lecture-3`,
                        name: `Lecture 3: الأخلاق المهنية وقواعد السلوك الأخلاقية`,
                        podbeanUrl: `https://www.podbean.com/player-v2/?i=kvh5g-1980677-pb&from=pb6admin&share=0&download=0&rtl=0&fonts=Arial&skin=1b1b1b&font-color=auto&logo_link=episode_page&btn-skin=3267a3`,
                        quizUrl: `pmiq3.html`
                    },
                    /*
                    ...Array.from({ length: 11 }, (_, i) => ({
                        id: `lecture-${i + 2}`,
                        name: `Lecture ${i + 2}: Calculus Fundamentals`,
                        podbeanUrl: "https://www.podbean.com/media/player/7u9h2-9g9k5?from=embed&skin=1&btn-skin=135&size=200&share=1&fonts=Inter&auto=0&download=1&rtl=0",
                        quizUrl: "https://www.qzzr.com/quiz/en/609a4d81-12c8-4a11-a8b2-38a3c898c6b7"
                    }))*/
                ]
            }
        ];

        const renderLectureList = (subjectName) => {
            const subject = subjects.find(s => s.name === subjectName);
            if (!subject) return;

            document.getElementById('subject-title').textContent = subject.name;
            document.getElementById('intro-message').classList.add('hidden');
            document.getElementById('lecture-detail-container').classList.add('hidden');
            document.getElementById('lecture-list-container').classList.remove('hidden');

            const lectureListDiv = document.getElementById('lecture-list');
            lectureListDiv.innerHTML = '';
            
            subject.lectures.forEach((lecture, index) => {
                const card = document.createElement('div');
                card.classList.add('bg-gray-900', 'p-4', 'rounded-lg', 'shadow', 'cursor-pointer', 'hover:shadow-md', 'transition-shadow', 'transition-colors', 'duration-300', 'border-2', 'border-custom-orange');
                card.innerHTML = `
                    <h3 class="font-semibold text-lg text-gray-200">${lecture.name}</h3>
                `;
                card.addEventListener('click', () => displayLecture(subject.name, index));
                lectureListDiv.appendChild(card);
            });
        };

        const displayLecture = (subjectName, lectureIndex) => {
            const subject = subjects.find(s => s.name === subjectName);
            const lecture = subject.lectures[lectureIndex];
            if (!lecture) return;

            document.getElementById('lecture-list-container').classList.add('hidden');
            document.getElementById('lecture-detail-container').classList.remove('hidden');

            document.getElementById('lecture-title').textContent = lecture.name;

            // Dynamically create the Podbean iframe
            const podbeanIframe = document.createElement('iframe');
            podbeanIframe.title = lecture.name;
            podbeanIframe.allowTransparency = "true";
            podbeanIframe.height = "150";
            podbeanIframe.width = "100%";
            podbeanIframe.style.border = "none";
            podbeanIframe.style.minWidth = "min(100%, 430px)";
            podbeanIframe.style.height = "150px";
            podbeanIframe.src = lecture.podbeanUrl;
            podbeanIframe.loading = "lazy";
            
            const podbeanContainer = document.getElementById('lecture-podbean-container');
            podbeanContainer.innerHTML = '';
            podbeanContainer.appendChild(podbeanIframe);

            // Dynamically create the Quiz iframe
            const quizIframe = document.createElement('iframe');
            quizIframe.id = "quizIframe";
            quizIframe.src = lecture.quizUrl;
            quizIframe.width = "100%";
            quizIframe.height = "600";
            quizIframe.frameborder = "0";
            quizIframe.allowFullscreen = true;

            const quizFrame = document.getElementById('quiz-frame');
            quizFrame.innerHTML = '';
            quizFrame.appendChild(quizIframe);

            // Lecture navigation buttons logic
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');

            // Handle previous button
            if (lectureIndex > 0) {
                prevBtn.disabled = false;
                prevBtn.onclick = () => displayLecture(subjectName, lectureIndex - 1);
            } else {
                prevBtn.disabled = true;
                prevBtn.onclick = null;
            }

            // Handle next button
            if (lectureIndex < subject.lectures.length - 1) {
                nextBtn.disabled = false;
                nextBtn.onclick = () => displayLecture(subjectName, lectureIndex + 1);
            } else {
                nextBtn.disabled = true;
                nextBtn.onclick = null;
            }
        };
        // Users
        const handleLogin = () => {
            const password = document.getElementById('passwordInput').value.trim();
            const users = {
                'mustafa@Hiwarat': '2019ITIBB0350',
                'dua290@Hiwarat': '2019ITIBB0290',
                'ahmeD@Hiwarat': '2020ITIBB0332',
                'Fatima@Hiwarat': 'Fatooma',
                'mohammeD@5alah': '2020ITIBB0360',
                'amani@Hiwarat': 'amani',
                '1423': 'Ahmed Almostafa'
            };
            
            if (users[password]) {
                const username = users[password];
                showMessage(`Login successful!`);
                document.getElementById('userIdDisplay').textContent = `Welcome, ${username}!`;
                document.getElementById('login-container').classList.add('hidden');
                document.getElementById('lms-content').classList.remove('hidden');
            } else {
                showMessage('Invalid password. Please try again.', 3000, true);
            }
        };

        const initializeLMS = () => {
            // Render subject buttons
            const sidebar = document.getElementById('sidebar');
            subjects.forEach(subject => {
                const button = document.createElement('button');
                button.classList.add('text-left', 'py-3', 'px-4', 'rounded-lg', 'font-medium', 'text-gray-300', 'hover:bg-gray-700', 'transition-colors', 'duration-300');
                button.innerHTML = `<span>${subject.name}</span>`;
                button.addEventListener('click', () => {
                    document.querySelectorAll('#sidebar button').forEach(btn => btn.classList.remove('bg-gray-700', 'text-blue-400'));
                    button.classList.add('bg-gray-700', 'text-blue-400');
                    renderLectureList(subject.name);
                });
                sidebar.appendChild(button);
            });

            // Set up event listeners for the login button
            document.getElementById('loginBtn').addEventListener('click', handleLogin);
            document.getElementById('passwordInput').addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    handleLogin();
                }
            });

            // Set up a single click listener for the full-screen button
            const fullScreenBtn = document.getElementById('fullScreenQuizBtn');
            fullScreenBtn.addEventListener('click', () => {
                const quizIframe = document.getElementById('quizIframe');
                if (quizIframe) {
                    if (quizIframe.requestFullscreen) {
                        quizIframe.requestFullscreen();
                    } else if (quizIframe.webkitRequestFullscreen) {
                        quizIframe.webkitRequestFullscreen();
                    } else if (quizIframe.msRequestFullscreen) {
                        quizIframe.msRequestFullscreen();
                    }
                } else {
                    showMessage('Quiz not loaded yet.', 3000, true);
                }
            });
        };

        window.onload = initializeLMS;