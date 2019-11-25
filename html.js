export default  `
<body>
        <br> <br>
    <div id="app">
        <input type="email" v-model="toEmail" value="demo@schoolprogramming.tech"
            placeholder="Enter receiver's email" id="email" >
        <br> <br>
        <button type="submit" @click="submit">Send Mail</button>
    </div>
</body>`;