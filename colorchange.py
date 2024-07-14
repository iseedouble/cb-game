from PIL import Image

# Load the uploaded image
image_path = 'collision.png'  # Path to your image file
image = Image.open(image_path)

# Change red pixels to blue
data = image.getdata()
new_data = []
for item in data:
    # Change all red (255, 0, 0) pixels to blue (0, 0, 255)
    if item[0] == 255 and item[1] == 0 and item[2] == 0:
        new_data.append((0, 0, 255, item[3]))  # Retain the alpha channel if present
    else:
        new_data.append(item)

# Create a new image with the modified data
blue_image = Image.new(image.mode, image.size)
blue_image.putdata(new_data)

# Save the new image
new_image_path = 'collision_blue.png'
blue_image.save(new_image_path)
