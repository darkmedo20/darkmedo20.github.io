// Define all classes for both modes to enable swapping
        const DARK_MODE_CLASSES = {
            'body': 'bg-black text-white',
            'mainContainer': 'bg-gray-900',
            'sidebar': 'bg-gray-800 border-gray-700',
            'sidebarButton': 'text-gray-300 hover:bg-gray-700',
            'sidebarButtonActive': 'bg-gray-700 text-blue-400',
            'innerSection': 'bg-gray-800',
            'textMuted': 'text-gray-400',
            'textStrong': 'text-gray-200',
            'buttonNav': 'bg-gray-700 hover:bg-gray-600 text-white',
            'loginCard': 'bg-gray-900',
            'inputField': 'bg-gray-700 text-white border-gray-600',
            'quizFullBtn': 'bg-gray-700 hover:bg-gray-600 text-white',
            'themeToggleHover': 'hover:bg-gray-700',
        };

        const LIGHT_MODE_CLASSES = {
            'body': 'bg-gray-100 text-gray-800',
            'mainContainer': 'bg-white',
            'sidebar': 'bg-gray-200 border-gray-300',
            'sidebarButton': 'text-gray-700 hover:bg-gray-300',
            'sidebarButtonActive': 'bg-gray-300 text-blue-600',
            'innerSection': 'bg-white',
            'textMuted': 'text-gray-500',
            'textStrong': 'text-gray-700',
            'buttonNav': 'bg-gray-300 hover:bg-gray-400 text-gray-800',
            'loginCard': 'bg-white',
            'inputField': 'bg-gray-50 text-gray-800 border-gray-300',
            'quizFullBtn': 'bg-gray-300 hover:bg-gray-400 text-gray-800',
            'themeToggleHover': 'hover:bg-gray-300',
        };

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

        const subjects = [
            // ... (Subjects data remains the same)
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
                        podbeanUrl: `https://www.podbean.com/player-v2/?i=9zute-19a20cc-pb&from=pb6admin&share=0&download=0&rtl=0&fonts=Arial&skin=1b1b1b&font-color=auto&logo_link=episode_page&btn-skin=3267a3`,
                        quizUrl: `naq2.html`
                    },
                    {
                        id: `lecture-3`,
                        name: `Lecture 3: User Group Management`,
                        podbeanUrl: `https://www.podbean.com/player-v2/?i=ne5jt-1978750-pb&from=pb6admin&share=0&download=0&rtl=0&fonts=Arial&skin=1b1b1b&font-color=auto&logo_link=episode_page&btn-skin=3267a3`,
                        quizUrl: `naq3.html`
                    },
                    {
                        id: `lecture-4`,
                        name: `Lecture 4: Controlling Processes`,
                        podbeanUrl: `https://www.podbean.com/player-v2/?i=hk63x-19a240f-pb&from=pb6admin&share=0&download=0&rtl=0&fonts=Arial&skin=1b1b1b&font-color=auto&logo_link=episode_page&btn-skin=3267a3`,
                        quizUrl: `naq4.html`
                    },
                    {
                        id: `lecture-5`,
                        name: `Lecture 5: File System`,
                        podbeanUrl: `https://www.podbean.com/player-v2/?i=xj384-19a2484-pb&from=pb6admin&share=0&download=0&rtl=0&fonts=Arial&skin=1b1b1b&font-color=auto&logo_link=episode_page&btn-skin=3267a3`,
                        quizUrl: `naq5.html`
                    },
                    {
                        id: `lecture-6`,
                        name: `Lecture 6: System Backups`,
                        podbeanUrl: `https://www.podbean.com/player-v2/?i=vwhie-19a30e3-pb&from=pb6admin&share=0&download=0&rtl=0&fonts=Arial&skin=1b1b1b&font-color=auto&logo_link=episode_page&btn-skin=3267a3`,
                        quizUrl: `naq6.html`
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

        // Function to apply theme classes
        const applyTheme = (isLightMode) => {
            const mode = isLightMode ? LIGHT_MODE_CLASSES : DARK_MODE_CLASSES;
            const oppositeMode = isLightMode ? DARK_MODE_CLASSES : LIGHT_MODE_CLASSES;
            
            const body = document.body;
            const mainContainer = document.querySelector('#lms-content > div');
            const loginCard = document.querySelector('#login-container > div');
            const sidebar = document.getElementById('sidebar');
            const lectureSections = document.querySelectorAll('#lecture-section, #quiz-section');
            const navButtons = document.querySelectorAll('#lecture-nav button');
            const inputField = document.getElementById('passwordInput');
            const textMuted = document.querySelectorAll('#login-info, #userIdDisplay, #intro-message');
            const textStrong = document.querySelectorAll('#lecture-title, #quiz-section h2, #subject-title, .font-semibold');
            const themeAwareButtons = document.querySelectorAll('.theme-aware-hover-bg');
            const fullScreenBtn = document.getElementById('fullScreenQuizBtn');
            const sunIcon = document.getElementById('sun-icon');
            const moonIcon = document.getElementById('moon-icon');
            // NEW: Get all sidebar toggle icons
            const toggleIcons = document.querySelectorAll('.sidebar-toggle-icon');

            // Helper to swap classes on an element
            const swapClasses = (element, modeKey, oppositeModeKey) => {
                if (element) {
                    element.classList.remove(...oppositeMode[oppositeModeKey || modeKey].split(' '));
                    element.classList.add(...mode[modeKey].split(' '));
                }
            };
            
            // 1. Body
            swapClasses(body, 'body');

            // 2. Main Content Wrapper
            swapClasses(mainContainer, 'mainContainer');
            if (mainContainer) {
                 // The border-r class on sidebar causes the main container border to be on the right. We update the border color on the sidebar.
                 const sidebarBorder = isLightMode ? 'border-gray-300' : 'border-gray-700';
                 sidebar.classList.remove('border-gray-300', 'border-gray-700');
                 sidebar.classList.add(sidebarBorder);
            }

            // 3. Login Card
            swapClasses(loginCard, 'loginCard');

            // 4. Input Field
            swapClasses(inputField, 'inputField');
            
            // 5. Sidebar and Inner Sections
            swapClasses(sidebar, 'sidebar');
            lectureSections.forEach(el => swapClasses(el, 'innerSection'));
            
            // 6. Navigation Buttons
            navButtons.forEach(btn => swapClasses(btn, 'buttonNav'));

            // 7. Text colors
            textMuted.forEach(el => swapClasses(el, 'textMuted'));
            textStrong.forEach(el => swapClasses(el, 'textStrong'));
            
            // 8. Sidebar Buttons (Handle non-active and active state swaps)
            document.querySelectorAll('#sidebar button').forEach(btn => {
                // Check if button is currently in an active state (using both potential active classes)
                const isActive = btn.classList.contains(...DARK_MODE_CLASSES.sidebarButtonActive.split(' ')) || 
                                 btn.classList.contains(...LIGHT_MODE_CLASSES.sidebarButtonActive.split(' '));
                
                // Remove all previous mode classes (both active and inactive)
                btn.classList.remove(...oppositeMode.sidebarButton.split(' '), ...oppositeMode.sidebarButtonActive.split(' '));
                
                // Add current mode classes
                btn.classList.add(...mode.sidebarButton.split(' '));
                
                if (isActive) {
                    // Re-apply the active state using the current theme's active classes
                    btn.classList.add(...mode.sidebarButtonActive.split(' '));
                }
            });

            // 9. Special UI Elements (Icons/Toggle)
            swapClasses(fullScreenBtn, 'quizFullBtn');
            
            // Apply theme to all aware buttons
            themeAwareButtons.forEach(btn => {
                swapClasses(btn, 'themeToggleHover');
            });

            // NEW: Apply color to the sidebar toggle icons
            toggleIcons.forEach(icon => {
                // Clear previous color and apply the new one
                icon.classList.remove('text-white', 'text-black'); 
                icon.classList.add(isLightMode ? 'text-black' : 'text-white');
            });


            if (isLightMode) {
                sunIcon.classList.remove('hidden');
                moonIcon.classList.add('hidden');
            } else {
                sunIcon.classList.add('hidden');
                moonIcon.classList.remove('hidden');
            }
        };

        const toggleTheme = () => {
            const isLightMode = localStorage.getItem('theme') === 'light';
            const newTheme = isLightMode ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            applyTheme(newTheme === 'light');
        };


        const renderLectureList = (subjectName) => {
            const subject = subjects.find(s => s.name === subjectName);
            if (!subject) return;

            const isLight = localStorage.getItem('theme') === 'light';
            const darkActiveClasses = DARK_MODE_CLASSES.sidebarButtonActive.split(' ');
            const lightActiveClasses = LIGHT_MODE_CLASSES.sidebarButtonActive.split(' ');
            const allActiveClasses = [...darkActiveClasses, ...lightActiveClasses];

            document.getElementById('subject-title').textContent = subject.name;
            document.getElementById('intro-message').classList.add('hidden');
            document.getElementById('lecture-detail-container').classList.add('hidden');
            document.getElementById('lecture-list-container').classList.remove('hidden');

            const lectureListDiv = document.getElementById('lecture-list');
            lectureListDiv.innerHTML = '';
            
            subject.lectures.forEach((lecture, index) => {
                const card = document.createElement('div');
                card.classList.add('p-4', 'rounded-lg', 'shadow', 'cursor-pointer', 'hover:shadow-md', 'transition-shadow', 'transition-colors', 'duration-300', 'border-2', 'border-custom-orange');
                
                // Apply theme-specific classes for the lecture card background/text
                const cardBaseClasses = isLight ? ['bg-white'] : ['bg-gray-900'];
                card.classList.add(...cardBaseClasses);
                
                const cardTitleColor = isLight ? 'text-gray-800' : 'text-gray-200';

                card.innerHTML = `
                    <h3 class="font-semibold text-lg ${cardTitleColor}">${lecture.name}</h3>
                `;
                card.addEventListener('click', () => displayLecture(subject.name, index));
                lectureListDiv.appendChild(card);
            });
            
            // Re-apply sidebar base classes in case they were lost
            const sidebar = document.getElementById('sidebar');
            const mode = isLight ? LIGHT_MODE_CLASSES : DARK_MODE_CLASSES;
            const oppositeMode = isLight ? DARK_MODE_CLASSES : LIGHT_MODE_CLASSES;
            sidebar.classList.remove(...oppositeMode.sidebar.split(' '));
            sidebar.classList.add(...mode.sidebar.split(' '));
            
            // Update sidebar button inactive state colors
            document.querySelectorAll('#sidebar button').forEach(btn => {
                btn.classList.remove(...oppositeMode.sidebarButton.split(' '));
                btn.classList.add(...mode.sidebarButton.split(' '));
            });

            // Logic for the sidebar button activation:
            document.querySelectorAll('#sidebar button').forEach(btn => {
                btn.onclick = () => {
                    // Remove ALL active classes from ALL buttons
                    document.querySelectorAll('#sidebar button').forEach(b => {
                        b.classList.remove(...allActiveClasses);
                    });
                    // Add the current theme's active classes to the clicked button
                    btn.classList.add(...(isLight ? lightActiveClasses : darkActiveClasses));
                    renderLectureList(subject.name); // Re-render logic is minimal here, usually just for UI
                };
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
            podbeanIframe.loading = "eager";
            
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
        
        const handleLogin = () => {
            const password = document.getElementById('passwordInput').value.trim();
            const users = {
                'mustafa@Hiwarat': '2019ITIBB0350',
                'dua290@Hiwarat': '2019ITIBB0290',
                'ahmeD@Hiwarat': '2020ITIBB0332',
                'Fatima@Hiwarat': 'Fatooma',
                'mohammeD@5alah': '2020ITIBB0360',
                'amani@Hiwarat': 'amani',
                'almuiz@Hiwarat': 'almuiz',
                '1423': 'Ahmed Almostafa'
            };
            
            if (users[password]) {
                const username = users[password];
                //showMessage(`Login successful!`);
                document.getElementById('userIdDisplay').textContent = `Welcome, ${username}!`;
                document.getElementById('login-container').classList.add('hidden');
                document.getElementById('lms-content').classList.remove('hidden');
                // Re-apply theme to ensure all elements are correct after login
                applyTheme(localStorage.getItem('theme') === 'light');
            } else {
                showMessage('Invalid password. Please try again.', 3000, true);
            }
        };

        const initializeLMS = () => {
            // Check for theme preference and apply it immediately
            const initialTheme = localStorage.getItem('theme') || 'dark'; // Default to dark
            applyTheme(initialTheme === 'light');
            
            // Render subject buttons
            const sidebar = document.getElementById('sidebar');
            subjects.forEach(subject => {
                const button = document.createElement('button');
                button.classList.add('text-left', 'py-3', 'px-4', 'rounded-lg', 'font-medium', 'transition-colors', 'duration-300');
                
                // Set initial button styling based on theme
                const isLight = initialTheme === 'light';
                const buttonClasses = isLight ? LIGHT_MODE_CLASSES.sidebarButton.split(' ') : DARK_MODE_CLASSES.sidebarButton.split(' ');
                button.classList.add(...buttonClasses);

                button.innerHTML = `<span>${subject.name}</span>`;
                button.addEventListener('click', () => {
                    const currentIsLight = localStorage.getItem('theme') === 'light';
                    const darkActiveClasses = DARK_MODE_CLASSES.sidebarButtonActive.split(' ');
                    const lightActiveClasses = LIGHT_MODE_CLASSES.sidebarButtonActive.split(' ');
                    const allActiveClasses = [...darkActiveClasses, ...lightActiveClasses];
                    
                    document.querySelectorAll('#sidebar button').forEach(btn => {
                        // Remove all possible active classes
                        btn.classList.remove(...allActiveClasses);
                    });
                    
                    // Apply the current theme's active classes
                    button.classList.add(...(currentIsLight ? lightActiveClasses : darkActiveClasses));
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
            
            // Set up theme toggle listener
            document.getElementById('themeToggle').addEventListener('click', toggleTheme);

            // Sidebar toggle listener 
            document.getElementById('sidebarToggle').addEventListener('click', () => {
                const sidebar = document.getElementById('sidebar');
                const chevronIcon = document.getElementById('chevron-left-icon');
                const menuIcon = document.getElementById('menu-icon');
                
                // Toggle the sidebar visibility
                sidebar.classList.toggle('hidden');
                
                // Toggle the button's icons
                if (sidebar.classList.contains('hidden')) {
                    // Sidebar is now hidden -> show menu icon (to bring it back)
                    chevronIcon.classList.add('hidden');
                    menuIcon.classList.remove('hidden');
                } else {
                    // Sidebar is now visible -> show chevron icon (to hide it)
                    chevronIcon.classList.remove('hidden');
                    menuIcon.classList.add('hidden');
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