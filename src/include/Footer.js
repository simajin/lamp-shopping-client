import React from 'react';

const Footer = () => {
    return (
        <div id="footer">
            <div id="footer-info">
                <div className="inner">
                    <div>
                        <h3>무통장 입금계좌</h3>
                        <p>BANK ACCOUNT</p>
                        <p>301-1234-5678-01</p>
                        <p>예금주 - 김그린(그린조명)</p>
                    </div>
                    <div>
                        <h3>고객센터</h3>
                        <p>영업시간 이외에는 문의게시판을 이용해주시면 당담자 확인 후 빠른 답변 도와드리겠습니다.</p>
                        <p id="tel">02-1236-1234</p>
                    </div>
                    <div>
                        <h3>공지사항</h3>
                        <ul>
                            <li>조명가이드 <sapn>2022-06-20</sapn></li>
                            <li>신상품 입고안내 <sapn>2022-06-17</sapn></li>
                            <li>몰 오픈을 축하드립니다<sapn>2022-06-11</sapn></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div id="footer-copy">
                <div className="inner">
                    <ul>
                        <li>홈</li>
                        <li>그린매장안내</li>
                        <li>이용약관</li>
                        <li>개인정보처리방침</li>
                    </ul>
                </div>
                <div id="copyright">
                    <div className="inner">
                        상호 : 그린조명 주소 : 울산광역시 남구 삼산중로100번길
                        대표전화 : 국번없이 052-1234-4223 대표이사 : 김그린
                        개인정보관리자 : 이블루 사업자 등록번호 : 102-12-12345
                        copyright(c) Green Lamp,.LTD all rights reserved.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;