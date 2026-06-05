// --- 🛠️ 10개 팀 확장 데이터셋 (1대1 짝궁 결합 매칭) ---
const teamMissions = {
    'ALPHA_A':   { partner: 'BRAVO_A',  receiveKey:'1', raw: "ABBCCDDDD",   freq: "A:000 ｜ B:01 ｜ C:001 ｜ D:1", compressed: "00001010010011111" },
    'ALPHA_B':   { partner: 'BRAVO_B',  receiveKey:'1',   raw: "GGGEFFHFF",   freq: "E:000 ｜ F:1 ｜ G:01 ｜ H:001", compressed: "0101010001100111" },
    'ALPHA_C':   { partner: 'BRAVO_C',  receiveKey:'1',    raw: "IIIHJKKKK", freq: "H:000 ｜ I:01 ｜ J:001 ｜ K:1", compressed: "0101010000011111" },

    'BRAVO_A':   { partner: 'ALPHA_A',  receiveKey:'1', raw: "MLLNNNOOO",   freq: "L:000 ｜ M:001 ｜ N:01 ｜ O:1", compressed: "001000000010101111"  },
    'BRAVO_B':   { partner: 'ALPHA_B',  receiveKey:'1',   raw: "PPQQRSSS",   freq: "P:000 ｜ Q:01 ｜ R:001 ｜ S:1", compressed: "0000000101001111" },
    'BRAVO_C':   { partner: 'ALPHA_C',  receiveKey:'1',    raw: "UUUUTTVXX", freq: "T:000 ｜ V:001 ｜ X:01 ｜ U:1", compressed: "11110000000010101" },

    'CHARLIE_A':   { partner: 'DELTA_A',  receiveKey:'1', raw: "ABBCCDDDD",   freq: "A:000 ｜ B:01 ｜ C:001 ｜ D:1", compressed: "00001010010011111" },
    'CHARLIE_B':   { partner: 'DELTA_B',  receiveKey:'1',   raw: "GGGEFFHFF",   freq: "E:000 ｜ F:1 ｜ G:01 ｜ H:001", compressed: "0101010001100111" },
    'CHARLIE_C':   { partner: 'DELTA_C',  receiveKey:'1',    raw: "IIIHJKKKK", freq: "H:000 ｜ I:01 ｜ J:001 ｜ K:1", compressed: "0101010000011111" },

    'DELTA_A':   { partner: 'CHARLIE_A',  receiveKey:'1', raw: "MLLNNNOOO",   freq: "L:000 ｜ M:001 ｜ N:01 ｜ O:1", compressed: "001000000010101111"  },
    'DELTA_B':   { partner: 'CHARLIE_B',  receiveKey:'1',   raw: "PPQQRSSS",   freq: "P:000 ｜ Q:01 ｜ R:001 ｜ S:1", compressed: "0000000101001111" },
    'DELTA_C':   { partner: 'CHARLIE_C',  receiveKey:'1',    raw: "UUUUTTVXX", freq: "T:000 ｜ V:001 ｜ X:01 ｜ U:1", compressed: "11110000000010101" },

    'ECHO_A':   { partner: 'FOXTROT_A',  receiveKey:'1', raw: "ABBCCDDDD",   freq: "A:000 ｜ B:01 ｜ C:001 ｜ D:1", compressed: "00001010010011111" },
    'ECHO_B':   { partner: 'FOXTROT_B',  receiveKey:'1',   raw: "GGGEFFHFF",   freq: "E:000 ｜ F:1 ｜ G:01 ｜ H:001", compressed: "0101010001100111" },
    'ECHO_C':   { partner: 'FOXTROT_C',  receiveKey:'1',    raw: "IIIHJKKKK", freq: "H:000 ｜ I:01 ｜ J:001 ｜ K:1", compressed: "0101010000011111" },

    'FOXTROT_A':   { partner: 'ECHO_A',  receiveKey:'1', raw: "MLLNNNOOO",   freq: "L:000 ｜ M:001 ｜ N:01 ｜ O:1", compressed: "001000000010101111"  },
    'FOXTROT_B':   { partner: 'ECHO_B',  receiveKey:'1',   raw: "PPQQRSSS",   freq: "P:000 ｜ Q:01 ｜ R:001 ｜ S:1", compressed: "0000000101001111" },
    'FOXTROT_C':   { partner: 'ECHO_C',  receiveKey:'1',    raw: "UUUUTTVXX", freq: "T:000 ｜ V:001 ｜ X:01 ｜ U:1", compressed: "11110000000010101" },

    'GOLF_A':   { partner: 'HOTEL_A',  receiveKey:'1', raw: "ABBCCDDDD",   freq: "A:000 ｜ B:01 ｜ C:001 ｜ D:1", compressed: "00001010010011111" },
    'GOLF_B':   { partner: 'HOTEL_B',  receiveKey:'1',   raw: "GGGEFFHFF",   freq: "E:000 ｜ F:1 ｜ G:01 ｜ H:001", compressed: "0101010001100111" },
    'GOLF_C':   { partner: 'HOTEL_C',  receiveKey:'1',    raw: "IIIHJKKKK", freq: "H:000 ｜ I:01 ｜ J:001 ｜ K:1", compressed: "0101010000011111" },

    'HOTEL_A':   { partner: 'GOLF_A',  receiveKey:'1', raw: "MLLNNNOOO",   freq: "L:000 ｜ M:001 ｜ N:01 ｜ O:1", compressed: "001000000010101111"  },
    'HOTEL_B':   { partner: 'GOLF_B',  receiveKey:'1',   raw: "PPQQRSSS",   freq: "P:000 ｜ Q:01 ｜ R:001 ｜ S:1", compressed: "0000000101001111" },
    'HOTEL_C':   { partner: 'GOLF_C',  receiveKey:'1',    raw: "UUUUTTVXX", freq: "T:000 ｜ V:001 ｜ X:01 ｜ U:1", compressed: "11110000000010101" },

    'INDIA_A':   { partner: 'JULIET_A',  receiveKey:'1', raw: "ABBCCDDDD",   freq: "A:000 ｜ B:01 ｜ C:001 ｜ D:1", compressed: "00001010010011111" },
    'INDIA_B':   { partner: 'JULIET_B',  receiveKey:'1',   raw: "GGGEFFHFF",   freq: "E:000 ｜ F:1 ｜ G:01 ｜ H:001", compressed: "0101010001100111" },
    'INDIA_C':   { partner: 'JULIET_C',  receiveKey:'1',    raw: "IIIHJKKKK", freq: "H:000 ｜ I:01 ｜ J:001 ｜ K:1", compressed: "0101010000011111" },

    'JULIET_A':   { partner: 'INDIA_A',  receiveKey:'1', raw: "MLLNNNOOO",   freq: "L:000 ｜ M:001 ｜ N:01 ｜ O:1", compressed: "001000000010101111"  },
    'JULIET_B':   { partner: 'INDIA_B',  receiveKey:'1',   raw: "PPQQRSSS",   freq: "P:000 ｜ Q:01 ｜ R:001 ｜ S:1", compressed: "0000000101001111" },
    'JULIET_C':   { partner: 'INDIA_C',  receiveKey:'1',    raw: "UUUUTTVXX", freq: "T:000 ｜ V:001 ｜ X:01 ｜ U:1", compressed: "11110000000010101" },
  };

let myTeam = '';
let partnerTeam = '';
let myEncryptedData = "";
let myKey = ''; 
let originalBits = 0;
let hackerInterval;
let penaltyInterval;
let timeLeft = 60; 
let penaltyTime = 30; 
window.onload = function () {
  typeMission();
};

//시작 화면에 나타나는 MISSION 타이핑 애니메이션
function typeMission() {
        const text = "[MISSION]\n  내가 확보하고 있는 암호를 파트너 팀에 안전하게 전송하라.\n 파트너로부터 받은 암호를 해독하여 금고의 인증 코드를 확보하라.";
        const target = document.getElementById("missionText");
        target.textContent = "";
        let i = 0;
        const typing = setInterval(() => {
            target.textContent += text.charAt(i);
            i++;
            if (i >= text.length) {
                clearInterval(typing);
            }
        }, 80); // 숫자가 작을수록 빠름
}


// 암호 전송 버튼 눌렀을 때 실행되는 함수
function startMission() {
    const codeInput = document.getElementById('teamCodeInput').value.trim().toUpperCase();
    const resultEl = document.getElementById('teamSelectResult');
    
    if (!codeInput) {
        alert("암호를 입력하십시오.");
        return;
    }
    
    if (teamMissions[codeInput]) {
        myTeam = codeInput;
        partnerTeam = teamMissions[myTeam].partner;
      
        const rawString = teamMissions[myTeam].raw;
        document.getElementById('rawData').innerText = rawString;
        document.getElementById('rawData_2').innerText = rawString;
      
        originalBits = rawString.length * 8;
        document.getElementById('originalBitCount').innerText = originalBits;
      
        document.getElementById('step-team').classList.remove('active');
        document.getElementById('step-intro').classList.add('active');
        playIntro();

        document.getElementById('assignedKey').innerText =  teamMissions[myTeam].receiveKey + "번 규칙";
    } else {
        resultEl.innerHTML = "<span class='error-msg'>❌ 승인 오류: 유효하지 않은 암호입니다.</span>";
    }
}

// 암호 전송 버튼 이후 시나리오 소개하는 함수
function playIntro() {

    const intro = document.getElementById("introText");

    const scenes = [

        {
        emoji:"📡",
        text: "데이터 전송",
        color: "#38bdf8"
        },

        {
          emoji:"🚨",
        text: "네트워크 장애 발생",
        color: "#f59e0b"
        },

        {
          emoji:"❌",
        text: "전송 실패!\n데이터 크기 초과",
        color: "#ef4444"
        },

        {
          emoji:"💾",
        text: "해결책 발견\n데이터 압축 필요",
        color: "#10b981"
        },

        {
        emoji:"👾",
        text: " 해커 침입 감지",
        color: "#ef4444"
        },

        {
          emoji:"❌",
        text: "비밀번호 탈취 위험",
        color: "#ef4444"
        },

        {
        emoji:"🔐",
        text: "해결책 발견!\n데이터 암호화 필요",
        color: "#10b981"
        },
    
        {
          emoji:"🎯",
        text: " 임무: 압축 → 암호화 → 전송 → 복호화 → 금고 해제",
        color: "#38bdf8"
        },

        {
          emoji:"🚀",
        text: "MISSION START",
        color: "#10b981"
        }

    ];

    let index = 0;

    function nextScene() {

        intro.style.opacity = 0;

        setTimeout(() => {
            intro.innerHTML = `
                <div class="main-emoji">${scenes[index].emoji}</div>
                <div class="main-text">${scenes[index].text.replace(/\n/g, "<br>")}</div>
            `;
            intro.style.color = scenes[index].color;
            intro.style.opacity = 1;
            index++;
            
            if(index < scenes.length){
                setTimeout(nextScene, 1800);
            } else {
                setTimeout(() => {
                    document
                    .getElementById("step-intro")
                    .classList.remove("active");

                    document
                    .getElementById("step-briefing")
                    .classList.add("active");

                }, 2000);
                }
        }, 300);
    }

    nextScene();
}

// 브리핑 끄고 압축 미션 수행하는 페이지로 넘어가는 함수
function startOperation() {
    document.getElementById('step-briefing').classList.remove('active');
    document.getElementById('step-huffman-practice').classList.add('active');
}

// 2. [신규 함수] BANANA 빈도수 체크 및 시뮬레이터 오픈
function checkFrequency() {
    const b = parseInt(document.getElementById('freq-b').value) || 0;
    const a = parseInt(document.getElementById('freq-a').value) || 0;
    const n = parseInt(document.getElementById('freq-n').value) || 0;
    
    const resultText = document.getElementById('quiz-result');
    const simulatorContainer = document.getElementById('simulator-container');

    // BANANA 분석 ➡️ B: 1개, A: 3개, N: 2개
    if (b === 1 && a === 3 && n === 2) {
        resultText.innerText = "🎯 정답입니다! 빈도수가 가장 높은 글자일수록 더 짧은 이진 코드를 얻게 됩니다. 아래 시뮬레이터로 작동 원리를 체험해보세요!";
        resultText.className = "success-text";
        
        // 시뮬레이터 영역 부드럽게 노출 (CSS에 효과가 없다면 그냥 나타남)
        simulatorContainer.style.display = "block";
        simulatorContainer.scrollIntoView({ behavior: 'smooth' });
    } else {
        resultText.innerText = "❌ 다시 세어보세요! 'BANANA'에 들어있는 글자 수를 차분히 세어봅시다.";
        resultText.className = "error-text";
        simulatorContainer.style.display = "none";
    }
}

// 3. [신규 함수] 체험을 마치고 원래 하려던 진짜 압축 미션 페이지로 이동
function goToCompressStep() {
  window.scrollTo(0, 0);
    document.getElementById('step-huffman-practice').classList.remove('active');
    document.getElementById('step-compress').classList.add('active');
}


function verifyCompression() {
  
  const input = document.getElementById('compressedInput').value.trim();
        const resultEl = document.getElementById('compressResult');
        const correctAns = teamMissions[myTeam].compressed;

        if (input === correctAns) {
            const compressedBits = correctAns.length;
            const saveRatio = Math.round(((originalBits - compressedBits) / originalBits) * 100);
      
            resultEl.innerHTML = `<span class='success-msg'>✓ 압축 패킷 검증 성공!</span><br>
                            <b style='color:#38bdf8;'>압축 후 데이터 크기: ${compressedBits} BIT</b><br>
                            (디지털 금고 전송 용량 약 ${saveRatio}% 절감 완료!)`;
                            
            document.getElementById('compressedDataDisplay').innerText = correctAns;
      
            setTimeout(() => {
                document.getElementById('step-compress').classList.remove('active');
                document.getElementById('step-encrypt').classList.add('active');
            }, 2500);
        } else {
            resultEl.innerHTML = "<span class='error-msg'>❌ 검증 실패: 검증 결과 데이터가 일치하지 않습니다. 트리를 다시 분석하세요!</span>";
        }
}

function verifyEncryption() {
    const rule = teamMissions[myTeam].receiveKey;
    const userInput = document.getElementById('encryptedInput').value.trim();
    const resultEl = document.getElementById('encryptResult');
    const str = teamMissions[myTeam].compressed;
    
    let expectedData = "";
    
    if (rule === "1") {
        expectedData = str.split('').map(b => b === '0' ? '1' : '0').join('');
    } else if (rule === "2") {
        expectedData = str.split('').reverse().join('');
    } else if (rule === "3") {
        if (str.length > 3) {
            expectedData = str.slice(3) + str.slice(0, 3);
        } else {
            expectedData = str;
        }
    }
    
    if (userInput === expectedData) {
        myKey = rule; 
        myEncryptedData = expectedData;
      
        resultEl.innerHTML = `<span class='success-msg'>✓암호화 프로토콜 일치 확인! 무결성 검증에 성공했습니다.</span>`;
        document.getElementById('encryptedDataDisplay').innerText = myEncryptedData;
      
        setTimeout(() => {
            document.getElementById('step-encrypt').classList.remove('active');
            document.getElementById('step-send').classList.add('active');
        }, 2000);
    } else {
        resultEl.innerHTML = "<span class='error-msg'>❌ 암호화 오류: 입력한 이진수가 규칙의 변환 결과와 다릅니다. 다시 읽어보세요!</span>";
    }
}

function sendData() {
  document
      .getElementById("step-send")
      .classList.remove("active");

    document
      .getElementById("receive-intro")
      .classList.add("active");
  const receiveIntro = document.getElementById("receiveIntroText");

  const scenes = [

        {
        emoji:"📡",
        text: "데이터 전송에 성공했습니다!",
        color: "#38bdf8"
        },

        {
        emoji:"🚄",
        text: "데이터가 압축되어 빠르게 전송되고 있습니다...",
        color: "#f59e0b"
        },

        {
          emoji:"📩",
        text: "파트너의 메시지가 도착했습니다!",
        color: "#ef4444"
        },

        {
        emoji:"🔐",
        text: "비밀번호 탈취 위험으로 데이터가 암호화되어있습니다.",
        color: "#10b981"
        },
    
        {
          emoji:"🎯",
        text: " 임무: 복호화 → 금고 해제",
        color: "#38bdf8"
        },

        {
          emoji:"🚀",
        text: "MISSION START",
        color: "#10b981"
        }

    ];

    let index = 0;

    function nextScene() {

        receiveIntro.style.opacity = 0;

        setTimeout(() => {
            receiveIntro.innerHTML = `
                <div class="main-emoji">${scenes[index].emoji}</div>
                <div class="main-text">${scenes[index].text.replace(/\n/g, "<br>")}</div>
            `;
            receiveIntro.style.color = scenes[index].color;
            receiveIntro.style.opacity = 1;
            index++;
            
            if(index < scenes.length){
                setTimeout(nextScene, 1800);
            } else {
                setTimeout(() => {
                    document
                    .getElementById("receive-intro")
                    .classList.remove("active");

                    document
                    .getElementById("step-receive")
                    .classList.add("active");

                }, 2000);
                }
        }, 300);
    }

    nextScene();
}



function checkReceive() {

  document.getElementById('receiveResult').innerText =
    "위성 신호 스캔 중...";

  const partnerCompressed =
    teamMissions[partnerTeam].compressed;

  const partnerKey =
    teamMissions[partnerTeam].receiveKey;

  const partnerEncryptedData =
    encryptDataByRule(partnerCompressed, partnerKey);

  setTimeout(() => {

    document.getElementById('receiveResult').innerHTML =
      "<span class='success-msg'>📥 파트너 기지로부터 암호 패킷이 도착했습니다!</span>";

    document.getElementById('receivedEncryptedData').innerText =
      partnerEncryptedData;

    document.getElementById('receivedKey').innerText =
      "해커의 암호 탈취를 방지하기 위해 데이터가 암호화되어있습니다. 원래 이진수 데이터로 바꾸세요!";

    document.getElementById('partnerFrequencyDisplay').innerText =
      teamMissions[partnerTeam].freq;

    document.getElementById('decryptionBox').style.display = "block";

    triggerHackerAttack();

  }, 1500);
}

function encryptDataByRule(data, rule) {

  if (rule === "1") {
    return data.split('').map(b => b === '0' ? '1' : '0').join('');
  }

  if (rule === "2") {
    return data.split('').reverse().join('');
  }

  if (rule === "3") {
    return data.length > 3
      ? data.slice(3) + data.slice(0, 3)
      : data;
  }

  return data;
}

  // 🛠️ [버그 수정 구역 1] 복구 시 파괴된 HTML 구조를 매번 강제로 재창조하도록 변경
function triggerHackerAttack() {
    document.getElementById('btnCheckReceive').disabled = true;
    
    const hackerBox = document.getElementById('hackerWarningBox');
    hackerBox.style.display = "block";
    hackerBox.style.animation = "alert-blink 1.5s infinite"; // 네온 깜빡임 리셋
    
    // 파괴되었던 countdownTimer 스팬 태그를 온전히 복구함
    hackerBox.innerHTML = `🚨 [위협 감지] 해커가 실시간 가로채기를 시도하며 암호 규칙을 추적 중입니다! 🚨<br>
                           금고 완전 차단(방어 실패)까지 남은 시간: <span id="countdownTimer" class="timer-text">60</span>초`;
    
    timeLeft = 60; 
    document.getElementById('countdownTimer').innerText = timeLeft;
    
    clearInterval(hackerInterval); // 중복 타이머 방지용 클리어
    hackerInterval = setInterval(function() {
      timeLeft--;
      const timerEl = document.getElementById('countdownTimer');
      if (timerEl) timerEl.innerText = timeLeft;
      
      if(timeLeft <= 0) {
        clearInterval(hackerInterval);
        triggerFailure("❌ [시스템 다운] 해커가 방화벽을 뚫고 금고 데이터를 소거했습니다!");
      }
    }, 1000);
  }
function verifyDecodedBinary() {

  const input =
    document.getElementById('decodedBinaryInput')
      .value.trim();

  const partnerCompressed =
    teamMissions[partnerTeam].compressed;

  const resultEl =
    document.getElementById('decodeResult');

  if (input === partnerCompressed) {

    resultEl.innerHTML =
      "<span class='success-msg'>✓ 암호 해독 성공!</span>";

    document.getElementById('huffmanBox')
      .style.display = "block";

    document.getElementById('decryptedInput')
      .style.display = "block";

    document.getElementById('btnVerifyDecrypt')
      .style.display = "inline-block";

  } else {

    resultEl.innerHTML =
      "<span class='error-msg'>❌ 암호 해독 실패. 규칙을 다시 적용해 보세요.</span>";
  }
}
function verifyDecryption() {
    const input = document.getElementById('decryptedInput').value.toUpperCase().trim();
    const correctPartnerRaw = teamMissions[partnerTeam].raw;
    
    if (input === correctPartnerRaw) {
      clearInterval(hackerInterval);
      document.getElementById('hackerWarningBox').style.animation = "none";
      document.getElementById('hackerWarningBox').style.backgroundColor = "#064e3b";
      document.getElementById('hackerWarningBox').style.borderColor = "#10b981";
      document.getElementById('hackerWarningBox').style.color = "#a7f3d0";
      if (partnerTeam == "ALPHA_A"){
        document.getElementById('finalResult').innerHTML = "<span class='success-msg' style='font-size:1.4em;'>🔓 MISSION CLEAR! <br> 비밀번호 4자리 중 첫 번째 자리: B의 개수</span>";
      }
      if (partnerTeam == "ALPHA_B"){
        document.getElementById('finalResult').innerHTML = "<span class='success-msg' style='font-size:1.4em;'>🔓 MISSION CLEAR! <br>비밀번호 4자리 중 두 번째 자리: F의 개수 x 2</span>";
      }
      if (partnerTeam == "ALPHA_C"){
        document.getElementById('finalResult').innerHTML = "<span class='success-msg' style='font-size:1.4em;'>🔓 MISSION CLEAR! <br>비밀번호 4자리 중 세 번째 자리: J의 개수, 네 번째 자리: K의 개수</span>";
      }
      if (partnerTeam == "BRAVO_A"){
        document.getElementById('finalResult').innerHTML = "<span class='success-msg' style='font-size:1.4em;'>🔓 MISSION CLEAR! <br>비밀번호 4자리 중 첫 번째 자리: M의 개수</span>";
      }
      if (partnerTeam == "BRAVO_B"){
        document.getElementById('finalResult').innerHTML = "<span class='success-msg' style='font-size:1.4em;'>🔓 MISSION CLEAR! <br>비밀번호 4자리 중 두 번째 자리: Ｑ의 개수, 네 번째 자리: P의 개수</span>";
      }
      if (partnerTeam == "BRAVO_C"){
        document.getElementById('finalResult').innerHTML = "<span class='success-msg' style='font-size:1.4em;'>🔓 MISSION CLEAR! <br>비밀번호 4자리 중 세 번째 자리: V의 개수 x 2</span>";
      }
        if (partnerTeam == "CHARLIE_A"){
        document.getElementById('finalResult').innerHTML = "<span class='success-msg' style='font-size:1.4em;'>🔓 MISSION CLEAR! <br> 비밀번호 4자리 중 첫 번째 자리: B의 개수</span>";
      }
      if (partnerTeam == "CHARLIE_B"){
        document.getElementById('finalResult').innerHTML = "<span class='success-msg' style='font-size:1.4em;'>🔓 MISSION CLEAR! <br>비밀번호 4자리 중 두 번째 자리: F의 개수 x 2</span>";
      }
      if (partnerTeam == "CHARLIE_C"){
        document.getElementById('finalResult').innerHTML = "<span class='success-msg' style='font-size:1.4em;'>🔓 MISSION CLEAR! <br>비밀번호 4자리 중 세 번째 자리: J의 개수, 네 번째 자리: K의 개수</span>";
      }
      if (partnerTeam == "DELTA_A"){
        document.getElementById('finalResult').innerHTML = "<span class='success-msg' style='font-size:1.4em;'>🔓 MISSION CLEAR! <br>비밀번호 4자리 중 첫 번째 자리: M의 개수</span>";
      }
      if (partnerTeam == "DELTA_B"){
        document.getElementById('finalResult').innerHTML = "<span class='success-msg' style='font-size:1.4em;'>🔓 MISSION CLEAR! <br>비밀번호 4자리 중 두 번째 자리: Ｑ의 개수, 네 번째 자리: P의 개수</span>";
      }
      if (partnerTeam == "DELTA_C"){
        document.getElementById('finalResult').innerHTML = "<span class='success-msg' style='font-size:1.4em;'>🔓 MISSION CLEAR! <br>비밀번호 4자리 중 세 번째 자리: V의 개수 x 2</span>";
      }

        if (partnerTeam == "ECHO_A"){
        document.getElementById('finalResult').innerHTML = "<span class='success-msg' style='font-size:1.4em;'>🔓 MISSION CLEAR! <br> 비밀번호 4자리 중 첫 번째 자리: B의 개수</span>";
      }
      if (partnerTeam == "ECHO_B"){
        document.getElementById('finalResult').innerHTML = "<span class='success-msg' style='font-size:1.4em;'>🔓 MISSION CLEAR! <br>비밀번호 4자리 중 두 번째 자리: F의 개수 x 2</span>";
      }
      if (partnerTeam == "ECHO_C"){
        document.getElementById('finalResult').innerHTML = "<span class='success-msg' style='font-size:1.4em;'>🔓 MISSION CLEAR! <br>비밀번호 4자리 중 세 번째 자리: J의 개수, 네 번째 자리: K의 개수</span>";
      }
      if (partnerTeam == "FOXTROT_A"){
        document.getElementById('finalResult').innerHTML = "<span class='success-msg' style='font-size:1.4em;'>🔓 MISSION CLEAR! <br>비밀번호 4자리 중 첫 번째 자리: M의 개수</span>";
      }
      if (partnerTeam == "FOXTROT_B"){
        document.getElementById('finalResult').innerHTML = "<span class='success-msg' style='font-size:1.4em;'>🔓 MISSION CLEAR! <br>비밀번호 4자리 중 두 번째 자리: Ｑ의 개수, 네 번째 자리: P의 개수</span>";
      }
      if (partnerTeam == "FOXTROT_C"){
        document.getElementById('finalResult').innerHTML = "<span class='success-msg' style='font-size:1.4em;'>🔓 MISSION CLEAR! <br>비밀번호 4자리 중 세 번째 자리: V의 개수 x 2</span>";
      }

        if (partnerTeam == "GOLF_A"){
        document.getElementById('finalResult').innerHTML = "<span class='success-msg' style='font-size:1.4em;'>🔓 MISSION CLEAR! <br> 비밀번호 4자리 중 첫 번째 자리: B의 개수</span>";
      }
      if (partnerTeam == "GOLF_B"){
        document.getElementById('finalResult').innerHTML = "<span class='success-msg' style='font-size:1.4em;'>🔓 MISSION CLEAR! <br>비밀번호 4자리 중 두 번째 자리: F의 개수 x 2</span>";
      }
      if (partnerTeam == "GOLF_C"){
        document.getElementById('finalResult').innerHTML = "<span class='success-msg' style='font-size:1.4em;'>🔓 MISSION CLEAR! <br>비밀번호 4자리 중 세 번째 자리: J의 개수, 네 번째 자리: K의 개수</span>";
      }
      if (partnerTeam == "HOTEL_A"){
        document.getElementById('finalResult').innerHTML = "<span class='success-msg' style='font-size:1.4em;'>🔓 MISSION CLEAR! <br>비밀번호 4자리 중 첫 번째 자리: M의 개수</span>";
      }
      if (partnerTeam == "HOTEL_B"){
        document.getElementById('finalResult').innerHTML = "<span class='success-msg' style='font-size:1.4em;'>🔓 MISSION CLEAR! <br>비밀번호 4자리 중 두 번째 자리: Ｑ의 개수, 네 번째 자리: P의 개수</span>";
      }
      if (partnerTeam == "HOTEL_C"){
        document.getElementById('finalResult').innerHTML = "<span class='success-msg' style='font-size:1.4em;'>🔓 MISSION CLEAR! <br>비밀번호 4자리 중 세 번째 자리: V의 개수 x 2</span>";
      }
        if (partnerTeam == "INDIA_A"){
        document.getElementById('finalResult').innerHTML = "<span class='success-msg' style='font-size:1.4em;'>🔓 MISSION CLEAR! <br> 비밀번호 4자리 중 첫 번째 자리: B의 개수</span>";
      }
      if (partnerTeam == "INDIA_B"){
        document.getElementById('finalResult').innerHTML = "<span class='success-msg' style='font-size:1.4em;'>🔓 MISSION CLEAR! <br>비밀번호 4자리 중 두 번째 자리: F의 개수 x 2</span>";
      }
      if (partnerTeam == "INDIA_C"){
        document.getElementById('finalResult').innerHTML = "<span class='success-msg' style='font-size:1.4em;'>🔓 MISSION CLEAR! <br>비밀번호 4자리 중 세 번째 자리: J의 개수, 네 번째 자리: K의 개수</span>";
      }
      if (partnerTeam == "JULIET_A"){
        document.getElementById('finalResult').innerHTML = "<span class='success-msg' style='font-size:1.4em;'>🔓 MISSION CLEAR! <br>비밀번호 4자리 중 첫 번째 자리: M의 개수</span>";
      }
      if (partnerTeam == "JULIET_B"){
        document.getElementById('finalResult').innerHTML = "<span class='success-msg' style='font-size:1.4em;'>🔓 MISSION CLEAR! <br>비밀번호 4자리 중 두 번째 자리: Ｑ의 개수, 네 번째 자리: P의 개수</span>";
      }
      if (partnerTeam == "JULIET_C"){
        document.getElementById('finalResult').innerHTML = "<span class='success-msg' style='font-size:1.4em;'>🔓 MISSION CLEAR! <br>비밀번호 4자리 중 세 번째 자리: V의 개수 x 2</span>";
      }
      
    } else {
      clearInterval(hackerInterval);
      triggerFailure("❌ [해독 오류] 잘못된 해독 암호를 입력하여 보안 잠금 장치가 작동합니다!");
    }
  }

  // 🛠️ [버그 수정 구역 2] 격리 패널티 타이머 안전 구동 및 완벽 복구 흐름 연결
 function triggerFailure(reasonMessage) {
    clearInterval(hackerInterval); // 해커 인터벌 확실하게 파괴
    
    document.getElementById('decryptionBox').style.display = "none";
    document.getElementById('btnVerifyDecrypt').disabled = true;
    document.getElementById('decryptedInput').disabled = true;
    
    document.getElementById('hackerWarningBox').style.animation = "none";
    document.getElementById('hackerWarningBox').style.backgroundColor = "#450a0a";
    document.getElementById('hackerWarningBox').style.borderColor = "#f43f5e";
    document.getElementById('hackerWarningBox').style.color = "#fecdd3";
    
    penaltyTime = 30; 
    document.getElementById('hackerWarningBox').innerHTML = reasonMessage + `<br><b>보안 유출 방지를 위해 30초 동안 데이터가 격리(숨김)됩니다.</b><br>🚨 시스템 자동 복구까지: <span id='penaltyTimer' style='font-size:1.3em;'>${penaltyTime}</span>초`;
    document.getElementById('finalResult').innerHTML = ""; 

    clearInterval(penaltyInterval); // 혹시 돌고 있을 기존 패널티 완전 삭제
    penaltyInterval = setInterval(function() {
      penaltyTime--;
      const timerEl = document.getElementById('penaltyTimer');
      if (timerEl) timerEl.innerText = penaltyTime;
      
      if (penaltyTime <= 0) {
        clearInterval(penaltyInterval);
        alert("시스템 방화벽이 재부팅되었습니다. 금고 해독을 재시도합니다.");
        
        document.getElementById('decryptedInput').value = "";
        document.getElementById('decryptedInput').disabled = false;
        document.getElementById('btnVerifyDecrypt').disabled = false;
        document.getElementById('decryptionBox').style.display = "block";
        
        // 중요: 이 함수 내부에서 HTML이 정상 복구되어 0초 정지 현상이 해결됩니다.
        triggerHackerAttack();
      }
    }, 1000);
  }
