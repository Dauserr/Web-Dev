def xyz_there(str):
  return '.xyz' not in str and 'xyz' in str or str.replace('.xyz', '').find('xyz') != -1
