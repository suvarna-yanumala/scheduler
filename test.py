import time;      # This is required to include time module.

ticks = time.time()
print ("\n\n Number of ticks since 12:00am, January 1, 1970:", ticks)
tinydict = {'one': 'john','code':6734, 'dept': 'sales'}
print (tinydict['one'])
# Open a file
fo = open("foo.txt", "w")
fo.write( "Python is a great language.\nYeah its great!!\n")

# Close opend file
fo.close()
def add(a,b):
    return a+b
print("=============",add(2,4))