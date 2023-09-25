// ���ض��� ��ʾ��ҳ�Ķ�����
window.onscroll = percent; // ִ�к���
// ҳ��ٷֱ�
function percent() {
  let a = document.documentElement.scrollTop || window.pageYOffset, // ��ȥ�߶�
    b =
      Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      ) - document.documentElement.clientHeight, // ������ҳ�߶� ��ȥ ���Ӹ߶�
    result = Math.round((a / b) * 100), // ����ٷֱ�
    btn = document.querySelector("#percent"); // ��ȡͼ��

  result <= 99 || (result = 99), (btn.innerHTML = result);
}

document.getElementById("page-name").innerText = document.title.split(" | FFing")[0];