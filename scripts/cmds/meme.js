module.exports = {
 config: {
 name: "meme",
 version: 1.0,
 author: "Rizky Z (Hadi)", 
 role: 0,
 countDown: 20,
 description: "𝗆𝖾𝗆𝖾 𝖨𝗇𝖽𝗈𝗇𝖾𝗌𝗂𝖺", 
 category: 'MEDIA',
 guide: { id: '{pn}' }
},

    onStart: async function({ message }) {
        const raffa = [
  "https://i.imgur.com/R1nOnEC.jpeg", 
  "https://i.ibb.co/WxmYM18/image.jpg", 
  "https://i.imgur.com/RPjoxxa.jpeg", 
  "https://i.ibb.co/txT5kDG/image.jpg", 
  "https://i.imgur.com/9Qqkwq8.jpeg", 
  "https://i.ibb.co/q1sdx3j/image.jpg", 
  "https://i.imgur.com/iLqxtnZ.jpeg", 
  "https://i.ibb.co/PGzspcX/image.jpg", 
  "https://i.imgur.com/ZoKNWoA.jpeg", 
  "https://i.ibb.co/frtrcpp/image.jpg", 
  "https://i.imgur.com/cXleFYR.jpeg", 
  "https://i.ibb.co/G59KC54/image.jpg", 
  "https://i.imgur.com/eInIjHD.jpeg", 
  "https://i.ibb.co/X3Std7s/image.jpg", 
  "https://i.imgur.com/qv4cDMA.jpeg", 
  "https://i.ibb.co/zbjTcLQ/image.jpg", 
  "https://i.imgur.com/WbGSimB.jpeg", 
  "https://i.ibb.co/gzc7rzg/image.jpg", 
  "https://i.imgur.com/IsU8p0W.jpeg", 
  "https://i.ibb.co/6nx2Lx2/image.jpg", 
  "https://i.imgur.com/xEzPkBL.jpeg", 
  "https://i.ibb.co/tQXt7dR/image.jpg", 
  "https://i.imgur.com/g59N6Yp.jpeg", 
  "https://i.ibb.co/YRHTp1r/image.jpg", 
  "https://i.imgur.com/lFKqNAT.jpeg", 
  "https://i.ibb.co/hFfk1fg/image.jpg", 
  "https://i.imgur.com/ofJvMHO.jpeg", 
  "https://i.ibb.co/1ZhXmsL/image.jpg", 
  "https://i.imgur.com/GcYGdEd.jpeg", 
  "https://i.ibb.co/kqkQXZc/image.jpg", 
  "https://i.imgur.com/fJ4tiQz.png", 
  "https://i.ibb.co/6Y0QS1p/image.jpg", 
  "https://i.imgur.com/B2n4TJj.png", 
  "https://i.ibb.co/smHmhGQ/image.jpg", 
  "https://i.imgur.com/NYT9eAU.jpeg", 
  "https://i.ibb.co/J3X34QY/xva213.jpg", 
  "https://i.imgur.com/ueF0mEq.jpeg", 
  "https://i.ibb.co/8BXzN0Q/image.jpg", 
  "https://i.imgur.com/cAaHd9t.jpeg", 
  "https://i.ibb.co/WvZJw3D/image.jpg", 
  "https://i.imgur.com/zyM6IU0.jpeg", 
  "https://i.ibb.co/wz27mL2/image.jpg", 
  "https://i.imgur.com/v6aB85k.jpeg", 
  "https://i.ibb.co/8YKCPBZ/image.jpg", 
  "https://i.imgur.com/tzUPQJ9.jpeg", 
  "https://i.ibb.co/BTRcWNT/image.jpg", 
  "https://i.imgur.com/0Hnz5Iu.jpeg", 
  "https://i.ibb.co/12z3CX0/image.jpg", 
  "https://i.imgur.com/UxnLmF5.jpeg", 
  "https://i.ibb.co/s5QHF0r/image.jpg", 
  "https://i.imgur.com/Zw5VWX6.jpeg", 
  "https://i.ibb.co/VBVvKGJ/image.jpg", 
  "https://i.imgur.com/nhId91U.jpeg", 
  "https://i.ibb.co/vztC2cR/image.jpg", 
  "https://i.imgur.com/Nm983rr.jpeg", 
  "https://i.ibb.co/xsN1PSt/image.jpg", 
  "https://i.imgur.com/n3qYPUe.jpeg", 
  "https://i.ibb.co/4Rr3fD3/image.jpg", 
  "https://i.imgur.com/ld2KjuX.jpeg", 
  "https://i.ibb.co/C6rDS8H/image.jpg", 
  "https://i.imgur.com/UWoOVb5.png", 
  "https://i.ibb.co/jyN9Vdt/image.jpg", 
  "https://i.imgur.com/5zedUMD.jpeg", 
  "https://i.ibb.co/c1dk1G8/image.jpg", 
  "https://i.imgur.com/4N8cUI4.jpeg", 
  "https://i.ibb.co/YT3CLDT/image.jpg", 
  "https://i.imgur.com/IMrZfaO.jpeg", 
  "https://i.ibb.co/zSyCdqJ/image.jpg", 
  "https://i.imgur.com/Ijw7P3I.jpeg",
  "https://i.ibb.co/xsN1PSt/image.jpg", 
  "https://i.imgur.com/Jpam7vX.jpeg", 
  "https://i.ibb.co/8NxsdpG/image.jpg", 
  "https://i.imgur.com/Ou0fSn8.jpeg", 
  "https://i.ibb.co/D7f5w50/image.jpg", 
  "https://i.imgur.com/W7HPjRt.jpeg", 
  "https://i.ibb.co/N9Yx6jM/image.jpg",
  "https://i.imgur.com/8QJFfG4.jpeg", 
  "https://i.ibb.co/Df0qwFX/image.jpg", 
  "https://i.imgur.com/KZ2hZHo.jpeg", 
  "https://i.ibb.co/KbDWRs0/image.jpg", 
  "https://i.imgur.com/98AjPfx.jpeg", 
  "https://i.ibb.co/XzTr4np/image.jpg", 
  "https://i.imgur.com/7CWsNin.jpeg", 
  "https://i.ibb.co/phGFwt2/image.jpg", 
  "https://i.imgur.com/QLqHKDk.jpeg", 
  "https://i.ibb.co/ysRf6JZ/image.jpg", 
  "https://i.imgur.com/iRKUuGG.jpeg", 
  "https://i.ibb.co/3R1BhkK/image.jpg", 
  "https://i.imgur.com/nGr3FDF.jpeg", 
  "https://i.ibb.co/wyPnJdj/image.jpg", 
  "https://i.imgur.com/g8jeg4Z.jpeg",
  "https://i.ibb.co/dmwPr2R/image.jpg", 
  "https://i.imgur.com/JCcL5Yv.jpeg", 
  "https://i.ibb.co/BGQCWTP/image.jpg", 
  "https://i.imgur.com/8fUs3eZ.jpeg", 
  "https://i.ibb.co/MnqppZL/image.jpg", 
  "https://i.imgur.com/kLkmZVa.jpeg", 
  "https://i.ibb.co/zrrF7cS/image.jpg", 
  "https://i.imgur.com/KUjENUL.jpeg", 
  "https://i.ibb.co/FKQbdDN/image.jpg", 
  "https://i.imgur.com/rOYYE4o.jpeg", 
  "https://i.ibb.co/c139XV3/image.jpg", 
  "https://i.ibb.co/grvbZcK/image.jpg", 
  "https://i.ibb.co/zRSsRGL/image.jpg", 
  "https://i.ibb.co/SXv1zfg/image.jpg", 
  "https://i.ibb.co/hMRNwFs/image.jpg", 
  "https://i.ibb.co/yRD2TWL/image.jpg", 
  "https://i.ibb.co/mGypyTX/image.jpg", 
  "https://i.ibb.co/xMZ02r0/image.jpg", 
  "https://i.ibb.co/K69pBbS/image.jpg", 
  "https://i.ibb.co/cXLDsbs/image.jpg", 
  "https://i.ibb.co/cXLDsbs/image.jpg", 
  "https://i.ibb.co/MBR2d3W/image.jpg", 
  "https://i.ibb.co/3BR4GSs/image.jpg", 
  "https://i.ibb.co/T26Wg8y/image.jpg", 
  "https://i.ibb.co/T1wn8QF/image.jpg", 
  "https://i.ibb.co/C0SL3ZK/image.jpg", 
  "https://i.ibb.co/4SgbbW0/image.jpg", 
  "https://i.ibb.co/RHt1W5P/image.jpg", 
  "https://i.ibb.co/bFFgnRw/image.jpg", 
  "https://i.ibb.co/YtjxDsX/image.jpg", 
  "https://i.ibb.co/ZWzzpq9/image.jpg", 
  "https://i.ibb.co/1TrV1Jx/image.jpg", 
  "https://i.ibb.co/Bc8HPrw/image.jpg", 
  "https://i.ibb.co/9s33mBH/image.jpg", 
  "https://i.ibb.co/553NJzV/image.jpg", 
  "https://i.ibb.co/ctdnv6r/image.jpg", 
  "https://i.ibb.co/qkjsPgB/image.jpg", 
  "https://i.ibb.co/MCvzS29/image.jpg", 
  "https://i.ibb.co/M229Bn8/image.jpg", 
  "https://i.ibb.co/VxYNMQ9/image.jpg", 
  "https://i.ibb.co/0nFp1PH/image.jpg", 
  "https://i.ibb.co/9qvT8mf/image.jpg", 
  "https://i.ibb.co/fHXfQQC/image.jpg", 
  "https://i.ibb.co/p0DLJrd/image.jpg", 
  "https://i.ibb.co/cQ1xshC/image.jpg", 
  "https://i.ibb.co/vJwTcfJ/image.jpg", 
  "https://i.ibb.co/XXWWGp7/image.jpg", 
  "https://i.ibb.co/2kLmKCC/image.jpg", 
  "https://i.ibb.co/K5ZrrLY/image.jpg", 
  "https://i.ibb.co/0ncB30t/image.jpg", 
  "https://i.ibb.co/PNGQXkQ/image.jpg", 
  "https://i.ibb.co/VJ7PmMP/image.jpg", 
  "https://i.ibb.co/TvXn4Dx/image.jpg", 
  "https://i.ibb.co/88hBkd3/image.jpg", 
  "https://i.ibb.co/XLpMCRD/image.jpg", 
  "https://i.ibb.co/Lzt6CDq/image.jpg", 
  "https://i.ibb.co/XXr8wgm/image.jpg", 
  "https://i.ibb.co/jbR2tcp/image.jpg", 
  "https://i.ibb.co/s6Khmnr/image.jpg", 
  "https://i.ibb.co/JtD1xdm/image.jpg", 
  "https://i.ibb.co/ySMpydW/image.jpg", 
  "https://i.ibb.co/kQqZ2tk/image.jpg", 
  "https://i.ibb.co/BGT9r2K/image.jpg", 
  "https://i.ibb.co/MSbX4pQ/image.jpg", 
  "https://i.ibb.co/ZW5V1SY/image.jpg", 
  "https://i.ibb.co/7g1tW1s/image.jpg", 
  "https://i.ibb.co/sqdSjRy/image.jpg", 
  "https://i.ibb.co/cDc1Cwd/image.jpg", 
  "https://i.ibb.co/vHQZv7w/image.jpg", 
  "https://i.ibb.co/jfsmYsp/image.jpg", 
  "https://i.ibb.co/WKH7FcY/image.jpg", 
  "https://i.ibb.co/qjr966z/image.jpg", 
  "https://i.ibb.co/M1G8Bnq/image.jpg", 
  "https://i.ibb.co/GcDvpDN/image.jpg", 
  "https://i.ibb.co/bNXKfHC/image.jpg", 
  "https://i.ibb.co/3MbkN0w/image.jpg", 
  "https://i.ibb.co/t44Hjgx/image.jpg", 
  "https://i.ibb.co/pfqnvFm/image.jpg", 
  "https://i.ibb.co/F47j9j7/image.jpg", 
  "https://i.ibb.co/GWYWZfw/image.jpg", 
  "https://i.ibb.co/tcXbhdY/image.jpg", 
  "https://i.ibb.co/zHQ7vq0/image.jpg", 
  "https://i.ibb.co/yhwJgY5/image.jpg", 
  "https://i.ibb.co/fYGpZqK/image.jpg", 
  "https://i.ibb.co/zHfDhcK/image.jpg", 
  "https://i.ibb.co/WcvMMX7/image.jpg", 
  "https://i.ibb.co/Yyg8F6W/image.jpg", 
  "https://i.ibb.co/tY1hqRX/image.jpg", 
  "https://i.ibb.co/F0LpJzL/image.jpg", 
  "https://i.ibb.co/yhbBVGx/image.jpg", 
  "https://i.ibb.co/FV6vc3C/image.jpg", 
  "https://i.ibb.co/m6CNTsX/image.jpg", 
  "https://i.ibb.co/9qz6qYN/image.jpg", 
  "https://i.ibb.co/QCWypmJ/image.jpg", 
  "https://i.ibb.co/HrVHCjb/image.jpg", 
  "https://i.ibb.co/TLdSpMj/image.jpg", 
  "https://i.ibb.co/8gNm0zf/image.jpg", 
  "https://i.ibb.co/ZhwMxNm/image.jpg", 
  "https://i.ibb.co/6YhTBJG/image.jpg", 
  "https://i.ibb.co/Z1kZgc9/image.jpg", 
  "https://i.ibb.co/QPWm14P/image.jpg", 
  "https://i.ibb.co/0sZtJL1/image.jpg", 
  "https://i.ibb.co/h8mxtLH/image.jpg", 
  "https://i.ibb.co/K725LmB/image.jpg", 
  "https://i.ibb.co/QFr9JGW/image.jpg", 
  "https://i.ibb.co/MkG0c11/image.jpg", 
  "https://i.ibb.co/YWdCKbM/image.jpg", 
  "https://i.ibb.co/9wgjm8C/image.jpg", 
  "https://i.ibb.co/P9gdTWm/image.jpg", 
  "https://i.ibb.co/Tq9ZX01/image.jpg", 
  "https://i.ibb.co/QMtpSK9/image.jpg", 
  "https://i.ibb.co/ZKLc5rY/image.jpg", 
  "https://i.ibb.co/mGywNgx/image.jpg", 
  "https://i.ibb.co/x1nzRBq/image.jpg", 
  "https://i.ibb.co/Tgz6pDV/image.jpg", 
  "https://i.ibb.co/n6bfknq/image.jpg", 
  "https://i.ibb.co/7gYthCK/image.jpg", 
  "https://i.ibb.co/X7C23Gb/image.jpg", 
  "https://i.ibb.co/xzTBZRs/image.jpg", 
  "https://i.ibb.co/wSgjQq9/image.jpg", 
  "https://i.ibb.co/JFCZD9z/image.jpg", 
  "https://i.ibb.co/zf6Xr7S/image.jpg", 
  "https://i.ibb.co/6rRVWW9/image.jpg", 
  "https://i.ibb.co/nfqC8rM/image.jpg", 
  "https://i.ibb.co/fxBr4KM/image.jpg", 
  "https://i.ibb.co/V9t4dbF/image.jpg", 
  "https://i.ibb.co/wCTZzX1/image.jpg", 
  "https://i.imgur.com/0zuGdjk.jpg",
  "https://i.imgur.com/uwehgdh.jpg",
  "https://i.imgur.com/yYhzYfz.jpg",
  "https://i.imgur.com/YwUrZYQ.jpg",
  "https://i.imgur.com/XbaXxSH.jpg",
  "https://i.imgur.com/izV8Lnx.jpg",
  "https://i.imgur.com/bwLrXis.jpg",
  "https://i.imgur.com/f7GmyoR.jpg",
  "https://i.imgur.com/w1Wptqo.jpg",
  "https://i.imgur.com/RNA1b32.jpg",
  "https://i.imgur.com/Jyp5mRo.jpg",
  "https://i.imgur.com/bKmJcBR.jpg",
  "https://i.imgur.com/mTkzvxt.jpg",
  "https://i.imgur.com/IYGDZGv.jpg",
  "https://i.imgur.com/iswHN60.jpg",
  "https://i.imgur.com/V1pkwvV.jpg",
  "https://i.imgur.com/ewrbve9.jpg",
  "https://i.imgur.com/YkYxku4.jpg",
  "https://i.imgur.com/oRxCadp.jpg",
  "https://i.imgur.com/1TeQ2aY.jpg",
  "https://i.imgur.com/OKDgzrq.jpg",
  "https://i.imgur.com/GnVI1QP.jpg",
  "https://i.imgur.com/ub8CA4I.jpg",
  "https://i.imgur.com/LsXur9C.jpg",
  "https://i.imgur.com/PaoMwXe.jpg",
  "https://i.imgur.com/SYCVYZe.jpg",
  "https://i.imgur.com/iw1InH4.jpg",
  "https://i.imgur.com/OB2rzYQ.jpg",
  "https://i.imgur.com/e6AwOES.jpg",
  "https://i.imgur.com/2momUEr.jpg",
  "https://i.imgur.com/cU35zQo.jpg",
  "https://i.imgur.com/mjYSPla.jpg"
];
  const hadi = raffa[Math.floor(Math.random() * raffa.length)];
  const pipi = await global.utils.getStreamFromURL(hadi);
  message.send({ attachment: pipi, body: '' });
 }
};