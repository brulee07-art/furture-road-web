import React, { useState } from 'react'
import './index.css'

export default function App(){
  const [page, setPage] = useState('home')
  return (
    <div className="app">
      <header className="header">
        <div className="logo">FUTURE ROAD</div>
        <nav className="nav">
          <button onClick={()=>setPage('home')}>홈</button>
          <button onClick={()=>setPage('about')}>대회소개</button>
          <button onClick={()=>setPage('participation')}>참가안내</button>
          <button onClick={()=>setPage('awards')}>시상내역</button>
          <button onClick={()=>setPage('schedule')}>대회일정</button>
          <button onClick={()=>setPage('location')}>찾아오시는길</button>
        </nav>
      </header>

      <main className="main">
        {page === 'home' && (
          <section className="hero">
            <h1>제1회 FUTURE ROAD 자율주행자동차 경진대회</h1>
            <p className="slogan">미래를 주행하다, 혁신을 향하다!</p>
            <p className="date">2025년 11월 15일(토) · 서영대학교 자동차관</p>
            <button className="cta">참가 신청하기</button>
          </section>
        )}

        {page === 'about' && (
          <section>
            <h2>대회 개요</h2>
            <ul>
              <li>행사명: 제1회 FUTURE ROAD 자율주행자동차 경진대회</li>
              <li>일시: 2025년 11월 15일(토)</li>
              <li>장소: 서영대학교 자동차관 자율주행자동차 성능시험장</li>
              <li>주최: FUTURE ROAD 교과연구회</li>
              <li>주관: FUTURE ROAD 운영위원회</li>
              <li>후원: 서영대학교</li>
            </ul>
            <h3>대회 목적</h3>
            <p>고등학생들이 자율주행 기술의 원리를 이해하고, 창의적 문제 해결 능력을 기르는 것을 목표로 합니다. 협업과 탐구를 통해 미래형 모빌리티 인재로 성장할 수 있는 기회를 제공합니다.</p>
          </section>
        )}

        {page === 'participation' && (
          <section>
            <h2>참가 안내</h2>
            <ul>
              <li>참가 대상: 광주광역시 소재 고등학생 (개인 또는 팀 단위)</li>
              <li>참가 방법: FUTURE ROAD 공식 홈페이지를 통해 온라인 접수</li>
              <li>제출 서류: 참가신청서, 개인정보 활용 동의서, 초상권 활용 동의서</li>
              <li>참가비: 무료</li>
              <li>문의: future.road@event.org</li>
            </ul>
          </section>
        )}

        {page === 'awards' && (
          <section>
            <h2>시상 내역</h2>
            <ul>
              <li>그랜드챔피언상 — 전체 부문 중 최고 점수 팀 (상장 및 트로피)</li>
              <li>혁신기술상 — 창의적 알고리즘, 센서 융합 등 기술 혁신성이 뛰어난 팀 (상장 및 트로피)</li>
              <li>안전주행상 — 주행 안정성, 제어 신뢰성 우수팀 (상장 및 트로피)</li>
              <li>정밀제어상 — 정밀 제어 구현 우수팀 (상장 및 트로피)</li>
              <li>미래비전상 — 협업 과정 및 미래성 우수팀 (상장 및 트로피)</li>
            </ul>
          </section>
        )}

        {page === 'schedule' && (
          <section>
            <h2>대회 일정</h2>
            <table>
              <thead><tr><th>시간</th><th>내용</th></tr></thead>
              <tbody>
                <tr><td>09:00 ~ 09:30</td><td>참가팀 등록 및 부스 배정</td></tr>
                <tr><td>09:30 ~ 10:00</td><td>서영대학교 자동차관 탐방</td></tr>
                <tr><td>10:00 ~ 10:20</td><td>팀 대표 미팅 및 대회 규정 공지</td></tr>
                <tr><td>10:20 ~ 12:00</td><td>주행 데이터 수집 및 연습 주행 (팀별 15분)</td></tr>
                <tr><td>12:00 ~ 13:00</td><td>점심 식사</td></tr>
                <tr><td>13:00 ~ 14:30</td><td>1차 주행</td></tr>
                <tr><td>14:30 ~ 16:00</td><td>2차 주행</td></tr>
                <tr><td>16:30</td><td>시상식</td></tr>
              </tbody>
            </table>
          </section>
        )}

        {page === 'location' && (
          <section>
            <h2>찾아오시는 길</h2>
            <p>서영대학교 자동차관 5층 자율주행자동차 성능시험장</p>
            <p>(광주광역시 북구 서강로 1, 서영대학교 내)</p>
            <p>버스: 12,16,18,27,29,49,51,58,63,72,192 — 서영대학교 하차</p>
            <p>자가용: '서영대학교 자동차관' 검색 후 캠퍼스 내 주차장 이용</p>
          </section>
        )}
      </main>

      <footer className="footer">
        <p>© 2025 FUTURE ROAD 교과연구회</p>
        <p>문의: futureroad@gwangdeok.net</p>
      </footer>
    </div>
  )
}
