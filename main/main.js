module.exports = function main() {
  let nums = arguments[0].split('');
  let chars_set = [
    ['._.', '...', '._.', '._.', '...', '._.', '._.', '._.', '._.', '._.'],
    ['|.|', '..|', '._|', '._|', '|_|', '|_.', '|_.', '..|', '|_|', '|_|'],
    ['|_|', '..|', '|_.', '._|', '..|', '._|', '|_|', '..|', '|_|', '..|']
  ]
  return [
    nums.map(c => chars_set[0][c]).join(' '),
    '\n',
    nums.map(c => chars_set[1][c]).join(' '),
    '\n',
    nums.map(c => chars_set[2][c]).join(' '),
    '\n'
  ].join('');
};