import { Text, View } from "react-native";

export default function Index() {
  return (
    
    <View className="flex-1 bg-[#FDFCFB] justify-center items-center">

      <Text className="text-[20px] font-pretRegular text-[#FF6E22]">
        Pretendard Regular 테스트
      </Text>
      
      <Text className="text-[20px] font-pretMedium text-[#FF6E22]">
        Pretendard Medium 테스트
      </Text>      


      <Text className="text-[20px] font-pretSemiBold text-[#FF6E22]">
        Pretendard Semi Bold 테스트
      </Text>

      <Text className="text-[20px] font-pretBold text-[#FF6E22]">
        Pretendard Bold 테스트
      </Text>

      <Text className="text-[20px] text-[#FF6E22]">
        시스템 폰트 테스트
      </Text>
    </View>
  );
}
