import { redirect } from "react-router-dom";

const getUserData = () => {
    const userDataJson = localStorage.getItem("userData");
    const userData = JSON.parse(userDataJson);

    return userData;
};

export const getUserToken = () => {
    return getUserData().token;
};

// 로그인 회원 정보를 불러오는 loader
export const userDataLoader = () => {
    return getUserData();
}

export const authCheckLoader = () => {
    const userData = getUserData();
    if(!userData) {
        alert('로그인이 필요한 서비스입니다.');
        return redirect('/');
    }
    return null;

}