const vulnerabilityData = {
    sqli: {
        title: "SQL Injection",
        desc: "입력값에 악의적인 SQL 구문을 주입하여 데이터베이스를 조회하거나 조작하는 데이터베이스 공격 방식입니다. Prepared Statement(매개변수화된 쿼리)를 사용하여 방어할 수 있습니다."
    },
    xss: {
        title: "XSS (Cross-Site Scripting)",
        desc: "웹사이트에 악성 자바스크립트 코드를 주입하여 다른 사용자의 쿠키나 세션을 탈취하는 공격입니다. 입출력값 검증 및 HTML 인코딩을 통해 예방합니다."
    },
    csrf: {
        title: "CSRF (Cross-Site Request Forgery)",
        desc: "사용자가 자신의 의지와는 무관하게 공격자가 의도한 행위(수정, 삭제 등)를 특정 웹사이트에 요청하게 만드는 공격입니다. CSRF 토큰 검증을 통해 방어합니다."
    }
};

function showInfo(type) {
    const infoBox = document.getElementById('info-box');
    const data = vulnerabilityData[type];

    if (data) {
        infoBox.innerHTML = `
            <h3 style="color: #00ff66; margin-bottom: 0.5rem;">${data.title}</h3>
            <p>${data.desc}</p>
        `;
    }
}