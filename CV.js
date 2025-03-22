function downloadCV() {
    const element = document.body;
    html2pdf().from(element).save('CV_NguyenVanA.pdf');
}
