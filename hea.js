
      const itsMe = {
        name: "kongukjae",
        age: 20,
        home: "oracle",
        hosil: "305ho",
        sentence: "저는" + this.name + "입니다",
        test: `저는 ${this.name}입니다`,

        adult: function() {
          if(this.age >= 20) {
            console.log("나는 성인이야");
          } else {
            console.log("나는 아직 성인이 아니야");
          }
        },
        nickName: function () {
          this.name = "공미남"
          console.log("나는 요미요미 귀요미");
        }
        
    };

    console.table(itsMe);
    itsMe.nickName();
    console.table(itsMe);
