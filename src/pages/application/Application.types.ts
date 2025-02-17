export type ApplicationType = {
    consentAgreed: ConsentStatus; // 개인정보 수집 동의 여부
    name: string; // 성함
    email: string; // 이메일
    phoneNumber: string; // 휴대폰 번호
    applicationField: ApplicationField; // 지원 분야    
};

export type ConsentStatus = "agree" | "disAgree" | null;

export type ApplicationField = "프론트엔드" | "백엔드" | "디자인" | "iOS" | "안드로이드" | "Product Owner" | null;